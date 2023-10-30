<script setup lang="ts">
type Props = {
    lines?: number
}

withDefaults(defineProps<Props>(), {
    lines: 3,
})
</script>

<template>
    <div class="p-skeleton-body-text-container">
        <div v-for="line in lines" :key="line" class="p-skeleton-body-text" />
    </div>
</template>
