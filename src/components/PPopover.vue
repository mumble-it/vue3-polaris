<script setup lang="ts">
// @ts-ignore
import {ArrowLeftMinor, HorizontalDotsMinor} from "@/icons"
import {computed, onBeforeUnmount, onMounted, ref, watch} from "vue";
import PPopoverPane from "@/components/PPopoverPane.vue";
import PText from "@/components/PText.vue";
import PActionList from "@/components/PActionList.vue";

type Props = {
    active?: boolean
    preferredAlignment?: 'left' | 'center' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
    active: false,
    preferredAlignment: 'center',
})
const emit = defineEmits<{
    (e: 'update:active', value: boolean): void
}>()

const classes = computed(() => ['p-popover'])
const overlayClasses = computed(() => ['p-popover__overlay', {
    'p-popover__overlay--open': props.active
}])

const triggerContainer = ref()
const overlay = ref()
const OFFSET = 8
const coordinates = computed(() => {
    let top = undefined
    let left = undefined

    if (triggerContainer.value && triggerContainer.value.children.length && overlay.value) {
        const trigger = triggerContainer.value.children[0]
        const rect = trigger.getBoundingClientRect()

        top = rect.top + window.scrollY
        left = rect.left + window.scrollX

        if (props.preferredAlignment === 'center') {
            left = Math.max(0, left - (overlay.value.clientWidth - trigger.clientWidth) / 2)
        }

        if (props.preferredAlignment === 'left') {
            left = Math.max(0, left - OFFSET)

            if ((left + overlay.value.clientWidth) > window.innerWidth) {
                left -= ((left + overlay.value.clientWidth) - window.innerWidth) + OFFSET
            }
        }

        if (props.preferredAlignment === 'right') {
            left = Math.max(0, left - (overlay.value.clientWidth - trigger.clientWidth) + 8)

            if ((left + overlay.value.clientWidth) > window.innerWidth) {
                left -= ((left + overlay.value.clientWidth) - window.innerWidth) + OFFSET
            }
        }

        top = top + triggerContainer.value.clientHeight
    }

    return {top, left}
})
const overlayStyle = computed(() => `top: ${coordinates.value.top}px; left: ${coordinates.value.left}px;`)

const onEscape = () => {
    emit('update:active', false)
}

const onClickOutside = (event: any) => {
    if (
        !(
            triggerContainer.value == event.target ||
            triggerContainer.value?.contains(event.target) ||
            overlay.value?.contains(event.target)
        )
    ) {
        emit('update:active', false)
    }
}

onMounted(() => {
    document.body.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
    document.body.removeEventListener('click', onClickOutside)
})

watch(() => props.active, (isActive) => {
    if(isActive) {
        const btn = overlay.value.querySelector('button') as HTMLButtonElement
        if(btn) btn.focus()
    }
})
</script>

<template>
    <div :class="classes" @keyup.esc="onEscape">
        <div ref="triggerContainer" class="p-popover__trigger-container">
            <slot />
        </div>

        <Teleport to="body">
            <div :class="overlayClasses" ref="overlay" :style="overlayStyle">
                <div class="p-popover__popover">
                    <div class="p-popover__content-container">
                        <div class="p-popover__content">
                            <PPopoverPane fixed subdued sectioned>
                                <PText font-weight="medium"> Available sales channels </PText>
                            </PPopoverPane>
                            <PPopoverPane>
                                <PActionList :items="[{ content: 'Ciao' }, { content: 'Delete' }]" />
                            </PPopoverPane>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>
