<script setup lang="ts">
import { Tab } from '@/types'
import Panel from '@/components/PTabs/components/Panel.vue'
import PText from '@/components/PText.vue'
import PBadge from '@/components/PBadge/PBadge.vue'

export interface Props {
    tabs: Tab[]
    selected?: number
    disabled?: boolean
    fitted?: boolean
    disclosureText?: string
}

const props = withDefaults(defineProps<Props>(), {
    selected: undefined,
    disabled: false,
    fitted: false,
    disclosureText: undefined,
})

const emit = defineEmits<{
    (event: 'select', selectTabIndex: number): void
}>()

const onTabClick = (index: number) => {
    if (props.disabled) return
    emit('select', index)
}
</script>

<template>
    <div class="p-tabs">
        <div class="p-tabs__box">
            <ul :class="['p-tabs__tabs-container', { 'p-tabs__tabs-container--fitted': fitted }]">
                <li v-for="(tab, index) in tabs" :key="tab.id" class="p-tabs__button-container">
                    <button
                        :class="['p-tabs__button', { 'p-tabs__button--active': selected === index }]"
                        type="button"
                        role="tab"
                        :aria-controls="tab.panelID"
                        :aria-label="tab.accessibilityLabel"
                        :aria-disabled="disabled"
                        @click="onTabClick(index)"
                    >
                        <PText as="span" font-weight="medium" variant="bodyLg">{{ tab.content }}</PText>
                        <PBadge v-if="tab.badge">{{ tab.badge }}</PBadge>
                    </button>
                </li>
            </ul>
        </div>
        <Panel
            v-for="(tab, index) in tabs"
            :key="tab.id"
            :tab-id="tab.id"
            :content="tab.content"
            :id="tab.panelID ?? `${tab.id}-panel`"
            :hidden="selected !== index"
        >
            <slot name="panel" />
        </Panel>
    </div>
</template>
