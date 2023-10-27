<script setup lang="ts">
import PText from '@/components/PText.vue'
import {computed} from "vue";
import {IconTone} from "@/types";

type Props = {
    accessibilityLabel?: string
    source?: any
    tone?: IconTone
}

const props = withDefaults(defineProps<Props>(), {
    accessibilityLabel: undefined,
    source: undefined,
    tone: 'base',
})

const classes = computed(() => ['p-icon', {
    'p-icon--base': props.tone === 'base',
    'p-icon--subdued': props.tone === 'subdued',
    'p-icon--caution': props.tone === 'caution',
    'p-icon--warning': props.tone === 'warning',
    'p-icon--critical': props.tone === 'critical',
    'p-icon--interactive': props.tone === 'interactive',
    'p-icon--info': props.tone === 'info',
    'p-icon--success': props.tone === 'success',
    'p-icon--primary': props.tone === 'primary',
    'p-icon--emphasis': props.tone === 'emphasis',
    'p-icon--magic': props.tone === 'magic',
    'p-icon--text-caution': props.tone === 'textCaution',
    'p-icon--text-warning': props.tone === 'textWarning',
    'p-icon--text-critical': props.tone === 'textCritical',
    'p-icon--text-info': props.tone === 'textInfo',
    'p-icon--text-success': props.tone === 'textSuccess',
    'p-icon--text-primary': props.tone === 'textPrimary',
    'p-icon--text-magic' : props.tone ==='textMagic',
}])
</script>

<template>
    <span>
        <PText as="span" visually-hidden> {{ accessibilityLabel }} </PText>
        <Component :is="source" :class="classes" />
    </span>
</template>
