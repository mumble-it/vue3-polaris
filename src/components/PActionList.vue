<script setup lang="ts">
import {ActionListItem} from '@/types'
// @ts-ignore
import {ChevronDownMinor, SearchMinor} from '@/icons'
import PText from "@/components/PText.vue";
import PTextField from "@/components/PTextField.vue";
import {computed, ref} from "vue";
import PIcon from "@/components/PIcon.vue";

type Props = {
    actionRole?: 'menuitem' | string
    allowFiltering?: boolean
    items?: readonly ActionListItem[]
    onActionAnyItem?: () => {}
}

const props = withDefaults(defineProps<Props>(), {
    actionRole: 'menuitem',
    // @ts-ignore
    items: [],
    onActionAnyItem: undefined,
})

const getCurrentIndex = (parent: HTMLElement) => {
    return parent.getAttribute('data-index') ?? '0'
}

const onKeyUp = (e: KeyboardEvent) => {
    const target = e.target as HTMLButtonElement
    const parent = target.parentNode as HTMLElement
    const menu = parent.parentNode!.parentNode! as HTMLElement
    const currentIndex = getCurrentIndex(parent)

    const prevItem = menu.querySelectorAll(`button`)[parseInt(currentIndex) - 1] as HTMLButtonElement

    if (prevItem) {
        prevItem.focus()
    } else {
        const lastItem = menu.querySelectorAll(`button`)[props.items.length - 1] as HTMLButtonElement
        lastItem.focus()
    }
}

const onKeyDown = (e: KeyboardEvent) => {
    const target = e.target as HTMLButtonElement
    const parent = target.parentNode as HTMLLIElement
    const menu = parent.parentNode!.parentNode! as HTMLElement
    const currentIndex = getCurrentIndex(parent)

    const nextItem = menu.querySelectorAll(`button`)[parseInt(currentIndex) + 1] as HTMLButtonElement

    if (nextItem) {
        nextItem.focus()
    } else {
        const firstItem = menu.querySelectorAll(`button`)[0] as HTMLButtonElement
        firstItem.focus()
    }
}

const search = ref('')
const itemsFiltered = computed(() => {
    return props.items.filter((item) => {
        const content = item.content || ''
        return content.toLowerCase().includes(search.value.toLowerCase())
    })
})
</script>

<template>
    <div class="p-action-list" @keyup.up="onKeyUp" @keydown.down="onKeyDown">

        <div v-if="allowFiltering && items.length > 7" class="p-action-list__search-wrapper">
            <PTextField v-model:value="search" placeholder="Search">
                <template #prefix>
                    <PIcon tone="subdued" :source="SearchMinor"/>
                </template>
            </PTextField>
        </div>

        <div class="p-action-list__list-wrapper">
            <ul class="p-action-list__list" role="menu">
                <li v-for="(item, index) in itemsFiltered" :key="item.content">
                    <div :data-index="index">
                        <button
                            type="button"
                            :class="['p-action-list__item', {
                                'p-action-list__item--active': item.active,
                                'p-action-list__item--disabled': item.disabled,
                                'p-action-list__item--destructive': item.destructive,
                                'p-action-list__item--truncate': item.truncate,
                                'p-action-list__item--indented': item.variant === 'indented',
                            }]"
                            :role="item.role || actionRole"
                            @click="onActionAnyItem"
                        >
                            <span v-if="item.icon" class="p-action-list__item-prefix">
                                <PIcon v-if="item.icon" :source="item.icon" />
                            </span>
                            <PText class="p-action-list__text">{{ item.content }}</PText>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
