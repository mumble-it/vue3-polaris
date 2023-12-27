import type { Meta, StoryObj } from '@storybook/vue3'

import PBadge from '../../src/components/PBadge/PBadge.vue'

const meta: Meta<typeof PBadge> = {
    title: 'Components/PBadge',
    component: PBadge,
    tags: ['autodocs'],
    argTypes: {
        tone: { control: 'select', options: ['info', 'success', 'attention', 'warning', 'critical'] },
        size: { control: 'select', options: ['medium', 'large'] },
        progress: { control: 'select', options: ['incomplete', 'partiallyComplete', 'complete'] },
    },
}

export default meta

type Story = StoryObj<typeof PBadge>

export const Default: Story = {
    render: (args) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge> Default </PBadge>',
    }),
}

export const Large: Story = {
    args: {
        size: 'large',
    },
    render: (args) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args"> Fullfilled </PBadge>',
    }),
}

export const Informational: Story = {
    args: {
        tone: 'info',
    },
    render: (args) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args"> Draft </PBadge>',
    }),
}

export const Success: Story = {
    args: {
        tone: 'success',
    },
    render: (args) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args"> Active </PBadge>',
    }),
}

export const Attention: Story = {
    args: {
        tone: 'attention',
    },
    render: (args) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args"> Open </PBadge>',
    }),
}

export const Warning: Story = {
    args: {
        tone: 'warning',
    },
    render: (args) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args"> On hold </PBadge>',
    }),
}

export const Critical: Story = {
    args: {
        tone: 'critical',
    },
    render: (args) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args"> Action required </PBadge>',
    }),
}

export const Incomplete: Story = {
    args: {
        tone: 'attention',
        progress: 'incomplete',
    },
    render: (args) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args"> Unfulfilled </PBadge>',
    }),
}

export const PartiallyComplete: Story = {
    args: {
        tone: 'warning',
        progress: 'partiallyComplete',
    },
    render: (args) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args"> Partially fulfilled </PBadge>',
    }),
}

export const Complete: Story = {
    args: {
        tone: 'success',
        progress: 'complete',
    },
    render: (args) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args"> Fulfilled </PBadge>',
    }),
}
