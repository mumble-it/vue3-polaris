<script setup lang="ts">
type Props = {
    icon?: any
}

withDefaults(defineProps<Props>(), {
    icon: undefined,
})
</script>

<template>
    <Component :is="icon" class="p-icon" />
</template>
