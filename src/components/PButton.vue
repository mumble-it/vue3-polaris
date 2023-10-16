<script setup lang="ts">
import {ButtonAlign, ButtonSize, ButtonVariant} from "@/types";
import {computed} from "vue";

type Props = {
    size?: ButtonSize
    textAlign?: ButtonAlign
    variant?: ButtonVariant
};

const props = withDefaults(defineProps<Props>(), {
    size: 'medium',
    textAlign: undefined,
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
    }
])

</script>

<template>
    <button :class="classes">
        <slot />
    </button>
</template>