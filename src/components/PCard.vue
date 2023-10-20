<script setup lang="ts">
import {computed} from 'vue'
import {Backgrounds, Breakpoints, SpaceScale} from "@/types";
import {getClassesFromBreakpoints} from "@/utils";

interface Props {
    background?: Backgrounds
    padding?: SpaceScale | { [Breakpoint in Breakpoints]?: SpaceScale }
}

const props = withDefaults(defineProps<Props>(), {
    background: 'bg-surface',
    // @ts-ignore
    padding: {xs: '400', sm: '500'},
})

const padding = computed(() => props.padding ?
    typeof props.padding === 'object' ? getClassesFromBreakpoints(props.padding, 'p-space') : `p-space-${props.padding}`
    : null)

const background = computed(() => props.background ? props.background : '')

const classes = computed(() => [ 'p-card test', padding.value, background.value ])
</script>

<template>
    <div class="p-card">
        <div :class="['p-card__container', classes]">
            <slot />
        </div>
    </div>
</template>
