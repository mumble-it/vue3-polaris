<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    shadow?: boolean
    sm?: boolean
    xs?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    shadow: false,
    sm: false,
    xs: false,
})

const classes = computed(() => [
    'card',
    {
        'card--shadow': props.shadow,
        'card--sm': props.sm,
        'card--xs': props.xs,
    },
])
</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>
