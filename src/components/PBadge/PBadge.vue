<script setup lang="ts">
import { BadgeProgress, BadgeSize, BadgeTone } from '@/types'
import { computed } from 'vue'
import PText from '@/components/PText.vue'
import PIcon from '@/components/PIcon.vue'
import { getDefaultAccessibilityLabel } from '@/components/PBadge/utils.ts'
import { ProgressComplete, ProgressIncomplete, ProgressPartiallyComplete } from '@/components/PBadge/icons'

type Props = {
    tone?: BadgeTone
    progress?: BadgeProgress
    icon?: any
    size?: BadgeSize
    toneAndProgressLabelOverride?: string
}

const props = withDefaults(defineProps<Props>(), {
    tone: undefined,
    progress: undefined,
    icon: undefined,
    size: 'medium',
    toneAndProgressLabelOverride: undefined,
})

const accessibilityLabel = computed(() =>
    props.toneAndProgressLabelOverride
        ? props.toneAndProgressLabelOverride
        : getDefaultAccessibilityLabel(props.progress, props.tone)
)

const progressControlMap = computed(() => {
    switch (props.progress) {
        case 'complete':
            return ProgressComplete
        case 'partiallyComplete':
            return ProgressPartiallyComplete
        case 'incomplete':
            return ProgressIncomplete
        default:
            return null
    }
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
        <span v-if="progress && !icon" class="p-badge__icon">
            <PIcon :icon="progressControlMap" :accessibility-label="accessibilityLabel" />
        </span>
        <PText v-else as="span" visually-hidden>{{ accessibilityLabel }}</PText>
        <span v-if="icon" class="p-badge__icon">
            <PIcon :icon="icon" />
        </span>
        <PText as="span" variant="bodySm" :font-weight="fontWeight">
            <slot />
        </PText>
    </span>
</template>
