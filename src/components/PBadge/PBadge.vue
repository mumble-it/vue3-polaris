<script setup lang="ts">
import { BadgeProgress, BadgeSize, TextWeight, Tone } from '@/types'
import { computed } from 'vue'
import PText from '@/components/PText.vue'
import PIcon from '@/components/PIcon.vue'
import { getDefaultAccessibilityLabel } from '@/utils/badge.utils.ts'
import { ProgressComplete, ProgressIncomplete, ProgressPartiallyComplete } from '@/components/PBadge/icons'

type Props = {
    tone?: Tone
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
            return ProgressIncomplete
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

const fontWeight = computed<TextWeight>(() => (props.tone === 'new' ? 'medium' : 'regular'))
</script>

<template>
    <span :class="classes">
        <span v-if="progress && !icon" class="p-badge__icon">
            <PIcon :source="progressControlMap" :accessibility-label="accessibilityLabel" />
        </span>
        <PText v-else as="span" visually-hidden>{{ accessibilityLabel }}</PText>
        <span v-if="icon" class="p-badge__icon">
            <PIcon :source="icon" />
        </span>
        <PText as="span" variant="bodySm" :font-weight="fontWeight">
            <slot />
        </PText>
    </span>
</template>
