<script setup lang="ts">
import { ButtonAlign, ButtonSize, ButtonTone, ButtonVariant, Target } from '@/types'
import {computed, useSlots} from 'vue'
import PSpinner from '@/components/PSpinner.vue'
import PIcon from "@/components/PIcon.vue";
// @ts-ignore
import { ChevronDownMinor } from '@/icons'

type Props = {
    accessibilityLabel?: string
    ariaChecked?: boolean
    ariaControls?: string
    ariaDescribedBy?: string
    ariaExpanded?: boolean
    disabled?: boolean
    disclosure?: boolean
    external?: boolean
    fullWidth?: boolean
    loading?: boolean
    id?: string
    icon?: any
    role?: string
    size?: ButtonSize
    submit?: boolean
    target?: Target
    textAlign?: ButtonAlign
    tone?: ButtonTone
    url?: string
    variant?: ButtonVariant
}

const props = withDefaults(defineProps<Props>(), {
    accessibilityLabel: undefined,
    ariaChecked: undefined,
    ariaControls: undefined,
    ariaDescribedBy: undefined,
    ariaExpanded: undefined,
    disabled: false,
    disclosure: false,
    external: false,
    fullWidth: false,
    loading: false,
    id: undefined,
    icon: undefined,
    role: undefined,
    size: 'medium',
    submit: undefined,
    target: undefined,
    textAlign: undefined,
    tone: undefined,
    url: undefined,
    variant: undefined,
})

const slots = useSlots()
const hasValue = computed(() => !!slots.default)

const classes = computed(() => [
    'p-button',
    {
        'p-button--medium': props.size === 'medium',
        'p-button--large': props.size === 'large',
        'p-button--center': props.textAlign === 'center',
        'p-button--left': props.textAlign === 'left',
        'p-button--right': props.textAlign === 'right',
        'p-button--plain': props.variant === 'plain',
        'p-button--primary': props.variant === 'primary',
        'p-button--tertiary': props.variant === 'tertiary',
        'p-button--monochrome-plain': props.variant === 'monochromePlain',
        'p-button--critical': props.tone === 'critical',
        'p-button--success': props.tone === 'success',
        'p-button--full-width': props.fullWidth,
        'p-button--disabled': props.disabled,
        'p-button--loading': props.loading,
        'p-button--icon-only': props.icon && !hasValue.value,
    },
])
</script>

<template>
    <Component
        :is="url ? 'a' : 'button'"
        :id="id"
        :class="classes"
        :disabled="disabled"
        :submit="submit"
        :href="url"
        :target="external ? '_blank' : target"
        :rel="external ? 'noopener noreferrer' : undefined"
        :aria-label="accessibilityLabel"
        :aria-controls="ariaControls"
        :aria-expanded="typeof ariaExpanded !== 'undefined' ? ariaExpanded : undefined"
        :aria-checked="typeof ariaChecked !== 'undefined' ? ariaChecked : undefined"
        :aria-describedby="ariaDescribedBy"
        :role="role"
    >
        <PSpinner v-show="loading" accessibility-label="Loading" size="small" class="p-button__spinner" />
        <span class="p-button__content">
            <PIcon v-if="icon" class="p-button__icon" :source="icon" />
            <slot />
            <PIcon v-if="disclosure" class="p-button__icon" :source="ChevronDownMinor" />
        </span>
    </Component>
</template>
