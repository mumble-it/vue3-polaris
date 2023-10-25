<script setup lang="ts">
import PText from '@/components/PText.vue'

type Props = {
    icon?: any
    accessibilityLabel?: string
}

withDefaults(defineProps<Props>(), {
    icon: undefined,
    accessibilityLabel: undefined,
})
</script>

<template>
    <span>
        <PText as="span" visually-hidden> {{ accessibilityLabel }} </PText>
        <Component :is="icon" class="p-icon" />
    </span>
</template>
