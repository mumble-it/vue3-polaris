<script setup lang="ts">
import { computed } from 'vue'
import PText from '@/components/PText.vue'

export interface Props {
    id: string
    tabId: string
    hidden?: boolean
    content?: string
}

const props = withDefaults(defineProps<Props>(), {
    id: '',
    tabId: '',
    hidden: false,
    content: '',
})

const classPanel = computed(() => [
    'p-tabs__panel',
    {
        'p-tabs__panel--hidden': props.hidden,
    },
])
</script>

<template>
    <div :class="classPanel" :id="id" role="tabpanel" :aria-labelledby="tabId" tabindex="-1">
        <div v-if="content" class="p-tabs__panel-header">
            <PText font-weight="medium">{{ content }}</PText>
        </div>
        <slot />
    </div>
</template>
