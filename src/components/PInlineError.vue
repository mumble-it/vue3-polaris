<script setup lang="ts">
// @ts-ignore
import {CircleInformationMajor} from '@/icons'
import PIcon from "@/components/PIcon.vue";

type Props = {
    message: string
}

withDefaults(defineProps<Props>(), {
    message: undefined,
})
</script>

<template>
    <div class="p-inline-error">
        <PIcon class="p-inline-error__icon" :source="CircleInformationMajor"/>
        {{ message }}
    </div>
</template>
