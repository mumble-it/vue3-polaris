<script setup lang="ts">
import {computed, onMounted, ref, useSlots, watch} from 'vue'
import {countDecimals, debounce as debounceFunction, uid} from '@/utils'
import {Action, TextFieldAutocomplete, TextFieldInputMode, TextFieldType} from '@/types'
import PIcon from '@/components/PIcon.vue'
// @ts-ignore
import {CaretDownMinor, CaretUpMinor, CircleCancelMinor, CircleInformationMajor} from '@/icons'
import PButton from '@/components/PButton.vue'
import PText from '@/components/PText.vue'
import PInlineError from '@/components/PInlineError.vue'

type Props = {
    action?: Action
    autocomplete?: TextFieldAutocomplete
    autofocus?: boolean
    clearButton?: boolean
    debounce?: number
    decimals?: number
    disabled?: boolean
    error?: string
    helpText?: string
    label?: string
    labelHidden?: boolean
    id?: string
    inputMode?: TextFieldInputMode
    min?: number
    max?: number
    maxLength?: number
    maxHeight?: number
    multiline?: number
    name?: string
    placeholder?: string
    required?: boolean
    requiredIndicator?: boolean
    readOnly?: boolean
    role?: string
    selectTextOnFocus?: boolean
    showCharacterCount?: boolean
    step?: string
    type?: TextFieldType
    value?: string | number | null
}

const props = withDefaults(defineProps<Props>(), {
    action: undefined,
    autocomplete: undefined,
    autofocus: false,
    clearButton: false,
    debounce: undefined,
    decimals: undefined,
    disabled: undefined,
    error: undefined,
    helpText: undefined,
    labelHidden: false,
    label: undefined,
    id: undefined,
    inputMode: undefined,
    min: undefined,
    max: undefined,
    maxLength: undefined,
    maxHeight: undefined,
    multiline: undefined,
    name: undefined,
    placeholder: undefined,
    required: undefined,
    requiredIndicator: undefined,
    readOnly: false,
    role: undefined,
    selectTextOnFocus: false,
    showCharacterCount: undefined,
    step: undefined,
    type: 'text',
    value: undefined,
})

const emit = defineEmits<{
    (event: 'update:value', value: string | number | null): void
}>()

const slots = useSlots()
const hasPrefix = computed(() => !!slots.prefix)
const hasSuffix = computed(() => !!slots.suffix)
const hasConnected = computed(() => !!slots.connectedLeft || !!slots.connectedRight)
const hasConnectedLeft = computed(() => !!slots.connectedLeft)
const hasConnectedRight = computed(() => !!slots.connectedRight)

watch(
    () => props.value,
    (value) => {
        if (props.type === 'number' && value) {
            const number = value as number
            console.log(number)

            if (props.max) {
                if (number > props.max) {
                    emit('update:value', props.max)
                }
            }

            if (props.min) {
                if (number < props.min) {
                    emit('update:value', props.min)
                }
            }

            if(typeof props.decimals !== 'undefined' && value) {
                const number = typeof value === 'string' ? parseFloat(value) : value
                if (!isNaN(number) && countDecimals(number) > props.decimals) {
                    emit('update:value', number.toFixed(props.decimals))
                    return
                }
            }
        }

        const stringValue = value as string
        if (props.maxLength && stringValue.length > props.maxLength) {
            emit('update:value', stringValue.substring(0, props.maxLength))
        }
    }
)

const input = ref<HTMLInputElement>()
const internalId = ref(props.id || uid())
const classes = computed(() => [
    'p-text-field',
    {
        'p-text-field--number': props.type === 'number',
        'p-text-field--disabled': props.disabled,
        'p-text-field--read-only': props.readOnly,
        'p-text-field--error': props.error,
        'p-text-field--required-indicator': props.requiredIndicator,
    },
])
const styleInput = computed(() => props.multiline && props.maxHeight ? `max-height: ${props.maxHeight}px` : undefined)

onMounted(() => {
    if (props.autofocus) input.value?.focus()
})

const onInput = debounceFunction((e: InputEvent) => {
    const value = e.target.value
    emit('update:value', props.type === 'number' ? +value : value)
}, props.debounce)

const onFocus = (e: InputEvent) => {
    if (props.selectTextOnFocus) e.target.select()
}

const onClickButtonNumber = (action: 'add' | 'remove') => {
    action === 'add' ? input.value?.stepUp() : input.value?.stepDown()
    const value = input.value?.value || '0'
    emit('update:value', props.type === 'number' ? +value : value)
}

const onClickClear = () => {
    emit('update:value', null)
}

const characterCount = computed<{ counter: string, ariaLabel: string }>(() => {
    if(!props.showCharacterCount || typeof props.value !== 'string' || !props.maxLength) return { counter: '', ariaLabel: '' }

    const stringValue = props.value as string;
    const stringLength = stringValue.length;

    return {
        counter: `${stringLength}/${props.maxLength}`,
        ariaLabel: `${stringLength} of ${props.maxLength} characters used`,
    }
})
</script>

<template>
    <div :class="classes">
        <div class="p-text-field__label-wrapper">
            <label
                :id="`text-field-label-${internalId}`"
                :for="internalId"
                :class="['p-text-field__label', { 'sr-only': labelHidden }]"
            >
                {{ label }}
            </label>
            <PButton
                v-if="action"
                :id="action.id"
                variant="plain"
                :url="action.url"
                :external="action.external"
                :target="action.target"
                :aria-label="action.accessibilityLabel"
                @click="action.onAction"
                @mouseenter="action.onMouseEnter"
                @touchstart="action.onTouchStart"
            >
                <PText> {{ action.content }}</PText>
            </PButton>
        </div>
        <div :class="{ 'p-text-field__connected': hasConnected }">
            <div class="p-text-field__item" v-if="hasConnectedLeft">
                <slot name="connectedLeft"/>
            </div>
            <div :class="{ 'p-text-field__item p-text-field__item--primary': hasConnected }">
                <div class="p-text-field__input-container">
                    <div v-if="hasPrefix" :id="`text-field-prefix-${internalId}`" class="p-text-field__prefix">
                        <slot name="prefix"/>
                    </div>
                    <Component
                        :is="multiline ? 'textarea' : 'input'"
                        :id="internalId"
                        ref="input"
                        class="p-text-field__input"
                        :type="type"
                        :value="value"
                        :name="name"
                        :placeholder="placeholder"
                        :disabled="disabled"
                        :autocomplete="autocomplete"
                        :max="max"
                        :min="min"
                        :maxlength="maxLength"
                        :inputmode="inputMode"
                        :step="step"
                        :multiline="multiline ? 'true' : undefined"
                        :readonly="readOnly"
                        :required="required"
                        :role="role"
                        :rows="multiline"
                        :aria-describedby="error ? `text-field-error-${internalId}`: helpText ? `text-field-help-text-${internalId}` : undefined"
                        :aria-labelledby="label ? `text-field-label-${internalId}` : undefined"
                        :aria-multiline="multiline ? 'true' : undefined"
                        :style="styleInput"
                        @input="onInput"
                        @focus="onFocus"
                    />
                    <div v-if="hasSuffix" :id="`text-field-suffix-${internalId}`" class="p-text-field__suffix">
                        <slot name="suffix"/>
                    </div>
                    <div
                        v-if="showCharacterCount"
                        :id="`text-field-label-${internalId}`"
                        class="p-text-field__character-count"
                        :aria-label="characterCount.ariaLabel"
                        aria-live="off"
                        aria-atomic="true"
                    >
                        {{ characterCount.counter }}
                    </div>
                    <button v-if="clearButton" type="button" class="p-text-field__clear-button" @click="onClickClear">
                        <PIcon :icon="CircleCancelMinor"/>
                    </button>
                    <div v-if="type === 'number'" class="p-text-field__number-actions" aria-hidden="true">
                        <div
                            role="button"
                            class="p-text-field__number-button"
                            tabindex="-1"
                            @click="onClickButtonNumber('add')"
                        >
                            <PIcon class="p-text-field__number-icon" :icon="CaretUpMinor"/>
                        </div>
                        <div
                            role="button"
                            class="p-text-field__number-button"
                            tabindex="-1"
                            @click="onClickButtonNumber('remove')"
                        >
                            <PIcon class="p-text-field__number-icon" :icon="CaretDownMinor"/>
                        </div>
                    </div>
                    <div class="p-text-field__backdrop" />
                </div>
            </div>
            <div class="p-text-field__item" v-if="hasConnectedRight">
                <slot name="connectedRight"/>
            </div>
        </div>
        <PInlineError v-if="error" :id="`text-field-error-${internalId}`" class="p-text-field__error" :message="error" />
        <PText v-if="helpText" tone="subdued" :id="`text-field-help-text-${internalId}`" class="p-text-field__help-text">
            {{ helpText }}
        </PText>
    </div>
</template>
