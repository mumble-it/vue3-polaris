<script setup lang="ts">
import {computed, ref} from "vue";
import {uid} from "@/utils";
import PText from "@/components/PText.vue";
import PInlineError from "@/components/PInlineError.vue";

type Props = {
    id?: string
    name?: string
    checked?: boolean
    disabled?: boolean
    labelClasses?: string
    helpText?: string
    error?: string
}

const props = withDefaults(defineProps<Props>(), {
    id: '',
    name: '',
    checked: false,
    disabled: false,
    labelClasses: '',
    helpText: undefined,
    error: undefined,
})

const emit = defineEmits<{
    (event: 'update:checked', isChecked: boolean): void
}>()

const isChecked = computed(() => props.checked)
const internalId = ref(props.id || uid())

const handleChange = (e: Event) => emit('update:checked', (e.target as HTMLInputElement).checked)
const classes = computed(() => ['p-checkbox', {
    'p-checkbox--disabled': props.disabled,
    'p-checkbox--error': props.error,
}])
const classesLabel = computed(() => 'p-checkbox__label ' + props.labelClasses)
const describedBy = computed(() => {
    let items = []
    if(props.helpText) items.push(`checkbox-helper-${internalId.value}`)
    if(props.error) items.push(`checkbox-error-${internalId.value}`)

    return items.join(' ')
})
</script>

<template>
    <div :class="classes">
        <label :class="classesLabel" :for="internalId">
        <span class="p-checkbox__wrapper">
            <input
                :id="internalId"
                :checked="isChecked"
                :name="name"
                :disabled="disabled"
                type="checkbox"
                class="p-checkbox__input form-checkbox"
                role="checkbox"
                :aria-invalid="!!error"
                :aria-checked="isChecked"
                :aria-describedby="describedBy"
                @change="handleChange"
            />
        </span>
            <span class="p-checkbox__text">
            <slot></slot>
        </span>
        </label>
        <div class="p-checkbox__descriptions">
            <div v-if="error">
                <PInlineError :id="`checkbox-error-${internalId}`" :message="error" />
            </div>
            <div class="p-checkbox__helper" :id="`checkbox-helper-${internalId}`">
                <PText tone="subdued">
                    {{ helpText }}
                </PText>
            </div>
        </div>
    </div>
</template>
