<script setup lang="ts">
import { computed } from 'vue'
import { TextAlignment, TextAs, TextDecorationLine, TextTone, TextVariant, TextWeight } from '@/types'

type Props = {
    as?: TextAs
    alignment?: TextAlignment
    breakWord?: boolean
    id?: string
    tone?: TextTone
    fontWeight?: TextWeight
    textDecorationLine?: TextDecorationLine
    truncate?: boolean
    variant?: TextVariant
    visuallyHidden?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    alignment: 'start',
    as: 'p',
    breakWord: false,
    id: undefined,
    tone: undefined,
    fontWeight: undefined,
    textDecorationLine: undefined,
    truncate: false,
    variant: 'bodyMd',
    visuallyHidden: false,
})

const classes = computed(() => [
    'p-text',
    {
        'p-text--body-sm': props.variant === 'bodySm',
        'p-text--body-md': props.variant === 'bodyMd',
        'p-text--body-lg': props.variant === 'bodyLg',
        'p-text--heading-sm': props.variant === 'headingSm',
        'p-text--heading-md': props.variant === 'headingMd',
        'p-text--heading-lg': props.variant === 'headingLg',
        'p-text--heading-xl': props.variant === 'headingXl',
        'p-text--heading-2xl': props.variant === 'heading2xl',
        'p-text--heading-3xl': props.variant === 'heading3xl',
        'p-text--break': props.breakWord,
        'p-text--start': props.alignment === 'start',
        'p-text--center': props.alignment === 'center',
        'p-text--end': props.alignment === 'end',
        'p-text--justify': props.alignment === 'justify',
        'p-text--medium': props.fontWeight === 'medium',
        'p-text--bold': props.fontWeight === 'bold',
        'p-text--regular': props.fontWeight === 'regular',
        'p-text--semibold': props.fontWeight === 'semibold',
        'p-text--success': props.tone === 'success',
        'p-text--caution': props.tone === 'caution',
        'p-text--text-inverse': props.tone === 'text-inverse',
        'p-text--subdued': props.tone === 'subdued',
        'p-text--critical': props.tone === 'critical',
        'p-text--visually-hidden': props.visuallyHidden,
        'p-text--line-through': props.textDecorationLine === 'line-through',
        'p-text--truncate': props.truncate,
    },
])
</script>

<template>
    <Component :is="as" :id="id" :class="classes">
        <slot />
    </Component>
</template>
