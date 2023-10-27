<script setup lang="ts">
import {computed} from "vue";

interface Props {
    fixed?: boolean
    height?: string
    subdued?: boolean
    sectioned?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    fixed: false,
    height: undefined,
    subdued: false,
    sectioned: false,
})

const classes = computed(() => ['p-popover-pane', {
    'p-popover-pane--fixed': props.fixed,
    'p-popover-pane--subdued': props.subdued,
    'p-popover-pane--sectioned': props.sectioned,
}])

const style = computed(() => `height: ${props.height}px; max-height: ${props.height}px; min-height: ${props.height}px;`)

</script>

<template>
    <div :class="classes" :style="style">
        <slot />
    </div>
</template>

