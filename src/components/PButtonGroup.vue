<script setup lang="ts">
import { computed } from 'vue'
import { ButtonGroupGap } from '@/types'

interface Props {
    gap?: ButtonGroupGap
    segmented?: boolean
    fullWidth?: boolean
    connectedTop?: boolean
    noWrap?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    gap: 'loose',
    segmented: false,
    fullWidth: false,
    connectedTop: false,
    noWrap: true,
})

const classes = computed(() => [
    'p-button-group',
    {
        'p-button-group--extra-tight': props.gap === 'extraTight',
        'p-button-group--tight': props.gap === 'tight',
        'p-button-group--loose': props.gap === 'loose',
        'p-button-group--segmented': props.segmented,
        'p-button-group--full-width': props.fullWidth,
        'p-button-group--connected-top': props.connectedTop,
        'p-button-group--no-wrap': props.noWrap,
    },
])
</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>
