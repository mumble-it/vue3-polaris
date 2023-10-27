<script setup lang="ts">
import PButton from "@/components/PButton.vue";
// @ts-ignore
import { ArrowLeftMinor, HorizontalDotsMinor } from "@/icons"

type Props = {
    icon?: any
    accessibilityLabel?: string
}

withDefaults(defineProps<Props>(), {
    icon: undefined,
    accessibilityLabel: undefined,
})
</script>

<template>
    <div class="p-page">
        <div class="p-page__header">
            <div class="p-page__header-top">
                <div>
                    <PButton variant="tertiary" :icon="ArrowLeftMinor" />
                </div>
                <div class="p-page__action-menu">
                    <PButton class="p-page__action-menu-icon" variant="tertiary" :icon="HorizontalDotsMinor" />
                </div>
                <div class="p-page__action-primary">
                    <PButton variant="primary" size="large"> Save </PButton>
                </div>
            </div>
            <slot />
        </div>
    </div>
</template>
