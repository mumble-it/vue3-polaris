<script setup lang="ts">
import {computed, ref} from "vue";
import { uid } from "@/utils";
import PIcon from "@/components/PIcon.vue";
// @ts-ignore
import { SelectMinor } from '@/icons'
import {Action} from "@/types";
import PText from "@/components/PText.vue";
import PButton from "@/components/PButton.vue";
import PInlineError from "@/components/PInlineError.vue";

type SelectOption = { label: string, value: string | number }

type Props = {
    action?: Action
    disabled?: boolean
    error?: string
    id?: string
    helpText?: string
    name?: string
    label?: string
    labelHidden?: boolean
    labelInline?: boolean
    options: SelectOption[]
    placeholder?: string
    requiredIndicator?: boolean
    value?: string | number,
}

const props = withDefaults(defineProps<Props>(), {
    action: undefined,
    disabled: false,
    error: undefined,
    id: '',
    name: '',
    helpText: undefined,
    label: '',
    labelHidden: false,
    labelInline: false,
    placeholder: undefined,
    requiredIndicator: false,
    value: undefined,
})

const emit = defineEmits<{
    (event: 'update:value', value: string | number): void
}>()

const internalId = ref(props.id || uid())

const classes = computed(() => ['p-select', {
    'p-select--disabled': props.disabled,
    'p-select--error': props.error,
    'p-select--required-indicator': props.requiredIndicator,
}])

const describedBy = computed(() => {
    let items = []
    if (props.helpText) items.push(`select-helper-${internalId.value}`)
    if (props.error) items.push(`select-error-${internalId.value}`)

    return items.join(' ')
})

const onChange = (e: InputSelectEvent) => {
    const value = e.target.value
    emit('update:value', value)
}

const selectedOptionLabel = computed(() => {

    return props.value ? props.options.find((opt) => opt.value === props.value)?.label : props.placeholder
})
</script>

<template>
    <div :class="classes">
        <div class="p-select__label-wrapper">
            <label
                :id="`select-label-${internalId}`"
                :for="internalId"
                :class="['p-select__label', { 'sr-only': labelHidden || labelInline }]"
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
        <div class="p-select__input-wrapper">
            <select
                class="p-select__input"
                :id="internalId"
                :name="name"
                :disabled="disabled"
                :aria-describedby="describedBy"
                :aria-labelledby="label ? `select-label-${internalId}` : undefined"
                :aria-invalid="!!error"
                :value="value"
                @change="onChange"
            >
                <option v-if="placeholder" value="" disabled> {{ placeholder }} </option>
                <option v-for="option in options" :key="option.value" :value="option.value">
                    {{ option.label }}
                </option>
            </select>
            <div class="p-select__content" aria-hidden="true">
                <div class="p-select__inline-label" v-if="labelInline">
                    <PText tone="subdued">{{ label }}</PText>
                </div>
                <span class="p-select__selected-option">
                    {{ selectedOptionLabel }}
                </span>
                <PIcon :source="SelectMinor" tone="subdued" />
            </div>
            <div class="p-select__backdrop" />
        </div>
        <PInlineError v-if="error" :id="`select-error-${internalId}`" class="p-select__error" :message="error" />
        <PText v-if="helpText" tone="subdued" :id="`select-help-text-${internalId}`" class="p-select__help-text">
            {{ helpText }}
        </PText>
    </div>
</template>
