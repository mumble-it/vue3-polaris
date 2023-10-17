<script setup lang="ts">
import {ButtonAlign, ButtonSize, ButtonTone, ButtonVariant} from "@/types";
import {computed} from "vue";
import PSpinner from "@/components/PSpinner.vue";

type Props = {
    accessibilityLabel?: string
    ariaChecked?: boolean
    ariaControls?: string
    ariaDescribedBy?: string
    ariaExpanded?: boolean
    disabled?: boolean
    external?: boolean
    fullWidth?: boolean
    loading?: boolean
    id?: string
    role?: string
    size?: ButtonSize
    submit?: boolean
    textAlign?: ButtonAlign
    tone?: ButtonTone
    url?: string
    variant?: ButtonVariant
};

const props = withDefaults(defineProps<Props>(), {
    accessibilityLabel: undefined,
    ariaChecked: undefined,
    ariaControls: undefined,
    ariaDescribedBy: undefined,
    ariaExpanded: undefined,
    disabled: false,
    external: false,
    fullWidth: false,
    loading: false,
    id: undefined,
    role: undefined,
    size: 'medium',
    submit: undefined,
    textAlign: undefined,
    tone: undefined,
    url: undefined,
    variant: undefined,
});

const classes = computed(() => [
    'p-btn',
    {
        'p-btn--medium': props.size === 'medium',
        'p-btn--large': props.size === 'large',
        'p-btn--center': props.textAlign === 'center',
        'p-btn--left': props.textAlign === 'left',
        'p-btn--right': props.textAlign === 'right',
        'p-btn--plain': props.variant === 'plain',
        'p-btn--primary': props.variant === 'primary',
        'p-btn--tertiary': props.variant === 'tertiary',
        'p-btn--monochrome-plain': props.variant === 'monochromePlain',
        'p-btn--critical': props.tone === 'critical',
        'p-btn--success': props.tone === 'success',
        'p-btn--full-width': props.fullWidth,
        'p-btn--disabled': props.disabled,
        'p-btn--loading': props.loading,
    }
])

</script>

<template>
    <Component
        :is="url ? 'a' : 'button'"
        :class="classes"
        :disabled="disabled"
        :submit="submit"
        :href="url"
        :target="external ? '_blank' : undefined"
        :rel="external ? 'noopener noreferrer' : undefined"
        :id="id"
        :aria-label="accessibilityLabel"
        :aria-controls="ariaControls"
        :aria-expanded="typeof ariaExpanded !== 'undefined' ? ariaExpanded : undefined"
        :aria-checked="typeof ariaChecked !== 'undefined' ? ariaChecked : undefined"
        :aria-describedby="ariaDescribedBy"
        :role="role"
    >
        <PSpinner accessibility-label="Loading" size="small" v-show="loading" class="p-btn__spinner" />
        <span class="p-btn__content">
            <slot />
        </span>
    </Component>
</template>