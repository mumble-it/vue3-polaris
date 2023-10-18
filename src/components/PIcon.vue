<script setup lang="ts">
type Props = {
    icon?: any
}

withDefaults(defineProps<Props>(), {
    icon: undefined,
})
</script>

<template>
    <img :src="icon" class="p-icon" />
</template>
