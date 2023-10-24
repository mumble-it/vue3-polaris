<script setup lang="ts">
import {computed, onMounted, ref, useSlots, watch} from 'vue'
import {countDecimals, debounce, uid} from "@/utils";
import {Action, TextFieldType} from "@/types";
import PIcon from "@/components/PIcon.vue";
// @ts-ignore
import {CaretDownMinor, CaretUpMinor} from "@/icons"
import PButton from "@/components/PButton.vue";
import PText from "@/components/PText.vue";

type Props = {
    action: Action,
    autocomplete?: string
    autofocus?: boolean
    debounce?: number
    decimals?: number
    disabled?: boolean
    helpText?: string
    label?: string
    labelHidden?: boolean
    id?: string
    min?: number
    max?: number
    multiline?: number
    name?: string
    placeholder?: string
    required?: boolean,
    step?: string
    type?: TextFieldType
    value?: string | number
}

const props = withDefaults(defineProps<Props>(), {
    action: undefined,
    autocomplete: undefined,
    autofocus: false,
    debounce: undefined,
    decimals: undefined,
    disabled: undefined,
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
    step: undefined,
    type: 'text',
    value: undefined,
})

const emit = defineEmits<{
    (event: 'update:value', value: string | number): void
}>()

const slots = useSlots()
const hasPrefix = computed(() => !!slots.prefix)
const hasSuffix = computed(() => !!slots.suffix)

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
    },
])

onMounted(() => {
    if (props.autofocus) input.value?.focus()
})

const onInput = debounce((e: InputEvent) => {
    console.log(e.target.value)
    emit('update:value', e.target.value)
}, props.debounce)


const onClickButtonNumber = (action: 'add' | 'remove') => {
    action === 'add' ? input.value?.stepUp() : input.value?.stepDown()
}
</script>

<template>
    <div :class="classes">
        <div class="p-text-field__label-wrapper">
            <label :id="`text-field-label-${internalId}`" :for="internalId"
                   :class="['p-text-field__label', { 'sr-only': labelHidden }]">
                <PText>{{ label }}</PText>
            </label>
            <PButton
                v-if="action"
                variant="plain"
                :id="action.id"
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
        <div class="p-text-field__input-container">
            <div v-if="hasPrefix" class="p-text-field__prefix" :id="`text-field-prefix-${internalId}`">
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
                :required="required"
                :placeholder="placeholder"
                :disabled="disabled"
                :autocomplete="autocomplete"
                :maxlength="max"
                :step="step"
                :rows="multiline"
                :multiline="multiline ? 'true' : undefined"
                :aria-describedby="helpText ? `text-field-help-text-${internalId}` : undefined"
                :aria-labelledby="label ? `text-field-label-${internalId}` : undefined"
                :aria-multiline="multiline ? 'true' : undefined"
                @input="onInput"
            />
            <div v-if="hasSuffix" class="p-text-field__suffix" :id="`text-field-suffix-${internalId}`">
                <slot name="suffix" />
            </div>
            <div v-if="type === 'number'" class="p-text-field__number-actions" aria-hidden="true">
                <div role="button" class="p-text-field__number-button" tabindex="-1" @click="onClickButtonNumber('add')">
                    <PIcon class="p-text-field__number-icon" :icon="CaretUpMinor" />
                </div>
                <div role="button" class="p-text-field__number-button" tabindex="-1" @click="onClickButtonNumber('remove')">
                    <PIcon class="p-text-field__number-icon" :icon="CaretDownMinor" />
                </div>
            </div>
            <div class="p-text-field__backdrop"/>
        </div>
    </div>
</template>
