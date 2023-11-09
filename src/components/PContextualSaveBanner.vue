<script setup lang="ts">
import {Action } from '@/types'
import PText from "@/components/PText.vue";
import PIcon from "@/components/PIcon.vue";
// @ts-ignore
import {ArrowLeftMinor, RiskMinor} from '@/icons'
import PButton from "@/components/PButton.vue";

interface Props {
    show?: boolean
    message?: string
    saveAction?: Action
    discardAction?: Action
}

withDefaults(defineProps<Props>(), {
    show: false,
    message: '',
    saveAction: undefined,
    discardAction: undefined,
})
</script>

<template>
    <Teleport to="body">
        <Transition name="slide-in">
            <div v-if="show" class="p-contextual-save-banner">
                <div class="p-contextual-save-banner__contents">
                    <div class="p-contextual-save-banner__message">
                        <PIcon :source="RiskMinor" />
                        <PText variant="headingMd" as="h2">{{ message }}</PText>
                    </div>
                    <div class="p-contextual-save-banner__actions">
                        <PButton
                            v-if="discardAction"
                            :id="discardAction.id"
                            :url="discardAction.url"
                            :external="discardAction.external"
                            :target="discardAction.target"
                            :disabled="discardAction.disabled"
                            :aria-label="discardAction.accessibilityLabel || discardAction.content"
                            @click="discardAction.onAction"
                            size="large"
                            variant="primary"
                        > {{ discardAction.content || 'Discard' }} </PButton>
                        <PButton
                            v-if="saveAction"
                            :id="saveAction.id"
                            :url="saveAction.url"
                            :external="saveAction.external"
                            :target="saveAction.target"
                            :disabled="saveAction.disabled"
                            :aria-label="saveAction.accessibilityLabel || saveAction.content"
                            @click="saveAction.onAction"
                            size="large"
                        >{{ saveAction.content || 'Save' }}</PButton>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
