<script setup lang="ts">
import { computed, onMounted, ref, useSlots, watch } from 'vue'
import { countDecimals, debounce as debounceFunction, uid } from '@/utils'
import { Action, TextFieldType } from '@/types'
import PIcon from '@/components/PIcon.vue'
// @ts-ignore
import { CaretDownMinor, CaretUpMinor, CircleCancelMinor, CircleInformationMajor } from '@/icons'
import PButton from '@/components/PButton.vue'
import PText from '@/components/PText.vue'

type Props = {
    action?: Action
    autocomplete?: string
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
    min?: number
    max?: number
    multiline?: number
    name?: string
    placeholder?: string
    required?: boolean
    readOnly?: boolean
    selectTextOnFocus?: boolean
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
    min: undefined,
    max: undefined,
    multiline: undefined,
    name: undefined,
    placeholder: undefined,
    required: undefined,
    readOnly: false,
    selectTextOnFocus: false,
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

            if (props.max) {
                if (number > props.max) {
                    emit('update:value', props.max.toString())
                }
            }

            if (props.min) {
                if (number < props.min) {
                    emit('update:value', props.min.toString())
                }
            }
        }

        if (props.type === 'number' && typeof props.decimals !== 'undefined' && value) {
            const number = typeof value === 'string' ? parseFloat(value) : value
            if (!isNaN(number) && countDecimals(number) > props.decimals) {
                emit('update:value', number.toFixed(props.decimals))
                return
            }
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
    },
])

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
</script>

<template>
    <div :class="classes">
        <div class="p-text-field__label-wrapper">
            <label
                :id="`text-field-label-${internalId}`"
                :for="internalId"
                :class="['p-text-field__label', { 'sr-only': labelHidden }]"
            >
                <PText>{{ label }}</PText>
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
                <PText> {{ action.content }} </PText>
            </PButton>
        </div>
        <div :class="{ 'p-text-field__connected': hasConnected }">
            <div class="p-text-field__item" v-if="hasConnectedLeft">
                <slot name="connectedLeft" />
            </div>
            <div :class="{ 'p-text-field__item p-text-field__item--primary': hasConnected }">
                <div class="p-text-field__input-container">
                    <div v-if="hasPrefix" :id="`text-field-prefix-${internalId}`" class="p-text-field__prefix">
                        <slot name="prefix" />
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
                        :maxlength="max"
                        :step="step"
                        :multiline="multiline ? 'true' : undefined"
                        :readonly="readOnly"
                        :required="required"
                        :rows="multiline"
                        :aria-describedby="error ? `text-field-error-${internalId}`: helpText ? `text-field-help-text-${internalId}` : undefined"
                        :aria-labelledby="label ? `text-field-label-${internalId}` : undefined"
                        :aria-multiline="multiline ? 'true' : undefined"
                        @input="onInput"
                        @focus="onFocus"
                    />
                    <div v-if="hasSuffix" :id="`text-field-suffix-${internalId}`" class="p-text-field__suffix">
                        <slot name="suffix" />
                    </div>
                    <button v-if="clearButton" type="button" class="p-text-field__clear-button" @click="onClickClear">
                        <PIcon :icon="CircleCancelMinor" />
                    </button>
                    <div v-if="type === 'number'" class="p-text-field__number-actions" aria-hidden="true">
                        <div
                            role="button"
                            class="p-text-field__number-button"
                            tabindex="-1"
                            @click="onClickButtonNumber('add')"
                        >
                            <PIcon class="p-text-field__number-icon" :icon="CaretUpMinor" />
                        </div>
                        <div
                            role="button"
                            class="p-text-field__number-button"
                            tabindex="-1"
                            @click="onClickButtonNumber('remove')"
                        >
                            <PIcon class="p-text-field__number-icon" :icon="CaretDownMinor" />
                        </div>
                    </div>
                    <div class="p-text-field__backdrop" />

                </div>
            </div>
            <div class="p-text-field__item" v-if="hasConnectedLeft">
                <slot name="connectedRight" />
            </div>
        </div>
        <div v-if="error" :id="`text-field-error-${internalId}`" class="p-text-field__error">
            <PIcon class="p-text-field__error-icon" :icon="CircleInformationMajor" />
            {{ error }}
        </div>
    </div>
</template>
