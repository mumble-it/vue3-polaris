<script setup lang="ts">
import PButton from "@/components/PButton.vue";
// @ts-ignore
import {ArrowLeftMinor, HorizontalDotsMinor} from "@/icons"
import PPopover from "@/components/PPopover.vue";
import PText from "@/components/PText.vue";
import PPopoverPane from "@/components/PPopoverPane.vue";
import {computed, ref} from "vue";
import PActionList from "@/components/PActionList.vue";
import {Action} from "@/types";
import useMobile from "@/hooks/useMobile"

type Props = {
    title?: string
    subtitle?: string
    backAction?: Action
    primaryAction?: Action
    secondaryActions?: Action[]
}

withDefaults(defineProps<Props>(), {
    title: '',
    subtitle: '',
    backAction: undefined,
    primaryAction: undefined,
    secondaryActions: () => [],
})

const isActionMenuActive = ref(false)
const isMobile = useMobile()
const buttonSize = computed(() => isMobile.value ? 'large' : 'medium')
</script>

<template>
    <div class="p-page">
        <div class="p-page__header">
            <div class="p-page__header-top">
                <div v-if="backAction">
                    <PButton
                        :id="backAction.id"
                        :url="backAction.url"
                        :external="backAction.external"
                        :target="backAction.target"
                        :disabled="backAction.disabled"
                        :aria-label="backAction.accessibilityLabel || backAction.content"
                        class="p-page__back"
                        variant="tertiary"
                        :size="buttonSize"
                        :icon="ArrowLeftMinor"
                        @click="backAction.onAction"
                    />
                </div>

                <div class="p-page__header-title">
                    <div class="p-page__title-wrapper">
                        <PText variant="headingXl" class="p-page__title">{{ title }}</PText>
                        <slot name="titleMetadata"/>
                    </div>
                    <PText class="p-page__subtitle" variant="bodySm" tone="subdued">
                        {{ subtitle }}
                    </PText>
                </div>

                <div class="p-page__action-menu">
                    <template v-if="!isMobile">
                        <div
                            v-for="(action, index) in secondaryActions"
                            :key="action.content || '' + index"
                        >
                            <PButton
                                :id="action.id"
                                :url="action.url"
                                :external="action.external"
                                :target="action.target"
                                :disabled="action.disabled"
                                :aria-label="action.accessibilityLabel || action.content"
                                class="p-page__secondary-button"
                                variant="tertiary"
                                :size="buttonSize"
                                @click="action.onAction"
                            >
                                {{ action.content }}
                            </PButton>
                        </div>
                    </template>
                    <PPopover v-else v-model:active="isActionMenuActive">
                        <PButton
                            class="p-page__action-menu-trigger"
                            variant="tertiary"
                            :icon="HorizontalDotsMinor"
                            size="large"
                            @click="() => isActionMenuActive = true"
                        />
                        <template #content>
                            <PPopoverPane>
                                <PActionList :items="secondaryActions" />
                            </PPopoverPane>
                        </template>
                    </PPopover>
                </div>
                <div class="p-page__action-primary">
                    <PButton
                        v-if="primaryAction"
                        :id="primaryAction.id"
                        :url="primaryAction.url"
                        :external="primaryAction.external"
                        :target="primaryAction.target"
                        :disabled="primaryAction.disabled"
                        :aria-label="primaryAction.accessibilityLabel || primaryAction.content"
                        class="p-page__back"
                        variant="primary"
                        :size="buttonSize"
                        @click="primaryAction.onAction"
                    >
                        {{ primaryAction.content }}
                    </PButton>
                </div>
            </div>

            <div>
                <div class="p-page__title-wrapper">
                    <PText variant="headingXl" class="p-page__title">{{ title }}</PText>
                    <slot name="titleMetadata"/>
                </div>
                <PText class="p-page__subtitle" variant="bodySm" tone="subdued">
                    {{ subtitle }}
                </PText>
            </div>
        </div>

        <slot/>
    </div>
</template>
