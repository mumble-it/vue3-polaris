<script setup lang="ts">
import { BannerTone, BannerDisableableAction, BannerLoadableAction, Action } from '@/types'
import { computed, ref, useSlots } from 'vue'
import { RiskMinor, TickMinor, DiamondAlertMinor, InfoMinor, CancelMinor } from '../icons/index.js'
import PIcon from '@/components/PIcon.vue'
import PText from '@/components/PText.vue'
import PButton from '@/components/PButton.vue'

type Props = {
    title?: string
    icon?: any
    hideIcon?: boolean
    tone?: BannerTone
    action?: BannerDisableableAction & BannerLoadableAction
    secondaryAction?: Action
    dismissible?: boolean
    stopAnnouncements?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    title: undefined,
    icon: undefined,
    hideIcon: false,
    tone: 'info',
    action: undefined,
    secondaryAction: undefined,
    dismissible: true,
    stopAnnouncements: false,
})

const emit = defineEmits<{
    (event: 'dismiss'): void
}>()

const slots = useSlots()
const hasContent = computed(() => props.title && (!!slots.default || props.action || props.secondaryAction))

const role = computed(() => (props.tone === 'warning' || props.tone === 'critical' ? 'alert' : 'status'))
const ariaLive = computed(() => (props.stopAnnouncements ? 'off' : 'polite'))

const classBannerHeader = computed(() => [
    'p-banner__header',
    {
        'p-banner__header--success': props.title && props.tone === 'success',
        'p-banner__header--warning': props.title && props.tone === 'warning',
        'p-banner__header--critical': props.title && props.tone === 'critical',
        'p-banner__header--info': props.title && props.tone === 'info',
    },
])

const classIconBox = computed(() => [
    'p-banner__icon-box',
    {
        'p-banner__icon-box--success': props.tone === 'success',
        'p-banner__icon-box--warning': props.tone === 'warning',
        'p-banner__icon-box--critical': props.tone === 'critical',
        'p-banner__icon-box--info': props.tone === 'info',
    },
])

const toneControlMap = computed(() => {
    switch (props.tone) {
        case 'success':
            return TickMinor
        case 'warning':
            return RiskMinor
        case 'critical':
            return DiamondAlertMinor
        case 'info':
            return InfoMinor
        default:
            return InfoMinor
    }
})

const banner = ref()
const shouldShowFocus = ref(false)

const classBanner = computed(() => {
    return [
        'p-banner',
        'p-banner--within-page',
        {
            'p-banner--key-focused': shouldShowFocus.value,
        },
    ]
})

const focus = () => {
    banner.value?.focus()
    shouldShowFocus.value = true
}

defineExpose({
    focus,
})

const onMouseUp = () => {
    banner.value?.blur()
    shouldShowFocus.value = false
}

const onKeyUp = () => {
    banner.value?.focus()
    shouldShowFocus.value = true
}

const onBlur = () => {
    shouldShowFocus.value = false
}

const onDismiss = () => {
    emit('dismiss')
}
</script>

<template>
    <div
        :class="classBanner"
        ref="banner"
        :role="role"
        :aria-live="ariaLive"
        :tabindex="0"
        @mouseup="onMouseUp"
        @keyup="onKeyUp"
        @blur="onBlur"
    >
        <div class="p-banner__box">
            <div class="p-banner__stack">
                <div :class="classBannerHeader">
                    <div class="p-banner__header-stack">
                        <div v-if="!title" class="p-banner__title">
                            <div :class="classIconBox">
                                <PIcon v-if="!hideIcon" :source="toneControlMap" />
                            </div>
                            <slot />
                        </div>

                        <div v-else class="p-banner__title">
                            <PIcon v-if="!hideIcon" :source="toneControlMap" />
                            <PText as="h2" variant="headingSm">{{ title }}</PText>
                        </div>
                        <PButton
                            v-if="dismissible"
                            :icon="CancelMinor"
                            variant="tertiary"
                            accessibility-label="Dismiss notification"
                            @click="onDismiss"
                        />
                    </div>
                </div>
                <div v-if="hasContent" class="p-banner__body">
                    <div class="p-banner__body-stack">
                        <slot />
                        <div v-if="action || secondaryAction" class="p-banner__button-group">
                            <div v-if="action" class="p-banner__button-item">
                                <PButton @click="action?.onAction">{{ action.content }}</PButton>
                            </div>

                            <div v-if="secondaryAction" class="p-banner__button-item">
                                <PButton @click="secondaryAction?.onAction">{{ secondaryAction.content }}</PButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
