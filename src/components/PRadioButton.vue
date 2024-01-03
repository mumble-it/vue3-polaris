<script setup lang="ts">
import { computed } from 'vue'
import { uid } from '@/utils'
import PText from '@/components/PText.vue'

export interface Props {
    ariaDescribedBy?: string
    label?: string
    labelHidden?: boolean
    checked?: boolean
    disabled?: boolean
    id?: string
    name?: string
    value?: string
    fill?: boolean
    helpText?: string
    tone?: 'magic'
}

const props = withDefaults(defineProps<Props>(), {
    ariaDescribedBy: '',
    label: '',
    labelHidden: false,
    checked: false,
    disabled: false,
    id: '',
    name: '',
    value: '',
    fill: false,
    helpText: '',
    tone: 'magic',
})

const emit = defineEmits<{
    radioClick: [id: string]
    radioChange: [id: string]
    radioFocus: [focused: boolean, id: string]
    radioBlur: [blurred: boolean, id: string]
}>()

const internalId = computed(() => props.id ?? uid())
const uniqName = computed(() => props.name ?? internalId.value)
const describedBy = computed(() => {
    let items = []
    if (props.helpText) items.push(`checkbox-helper-${internalId.value}`)
    return items.join(' ')
})

const onRadioButtonClick = (id: string) => {
    emit('radioClick', id)
}
</script>

<template>
    <div class="p-radio-button">
        <label :for="internalId" class="p-radio-button__label" @click="onRadioButtonClick(props.id)">
            <span class="w-[18px] h-[18px] flex items-stretch mr-2">
                <span class="w-full relative m-px">
                    <input
                        type="radio"
                        :value="value"
                        :name="uniqName"
                        :id="internalId"
                        :checked="checked"
                        class="p-radio-button__input"
                        :disabled="disabled"
                        :aria-describedby="describedBy"
                        @change="() => emit('radioChange', props.id)"
                        @focus="() => emit('radioFocus', true, props.id)"
                        @blur="() => emit('radioBlur', true, props.id)"
                    />
                    <span class="p-radio-button__backdrop"></span>
                </span>
            </span>

            <PText v-if="!labelHidden" as="span">{{ label }}</PText>
        </label>

        <div class="pl-6">
            <div class="mb-1">
                <PText as="span" tone="subdued">{{ helpText }}</PText>
            </div>
        </div>
    </div>
</template>
