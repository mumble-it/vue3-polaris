<script setup lang="ts">
import { BadgeProgress, BadgeSize, BadgeTone } from '@/types'
import { computed } from 'vue'
import PText from '@/components/PText.vue'

type Props = {
    tone?: BadgeTone
    progress?: BadgeProgress
    icon?: any
    size?: BadgeSize
    toneAndProgressLabelOverride?: string
}

const props = withDefaults(defineProps<Props>(), {
    size: 'medium',
})

const classes = computed(() => [
    'p-badge',
    {
        'p-badge--medium': props.size === 'medium',
        'p-badge--large': props.size === 'large',
        'p-badge--info': props.tone === 'info',
        'p-badge--success': props.tone === 'success',
        'p-badge--attention': props.tone === 'attention',
        'p-badge--warning': props.tone === 'warning',
        'p-badge--critical': props.tone === 'critical',
        'p-badge--incomplete': props.progress === 'incomplete',
    },
])

const fontWeight = computed(() => (props.tone === 'new' ? 'medium' : undefined))
</script>

<template>
    <span :class="classes">
        <PText as="span" variant="bodySm" :font-weight="fontWeight">
            <slot />
        </PText>
    </span>
</template>
