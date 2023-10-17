<script setup lang="ts">
import { ref, watch } from "vue";

type Props = {
    name?: string
}

const props = withDefaults(defineProps<Props>(), {
    name: undefined,
})

const icon = ref()
watch(() => props.name, async  (value) => {
        icon.value = await import(/* @vite-ignore */`../icons/${value}.svg`)
}, { immediate: true })
</script>

<template>
    <Component :is="icon" class="p-icon" />
</template>
