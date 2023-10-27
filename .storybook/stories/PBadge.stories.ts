import type { Meta, StoryObj } from '@storybook/vue3'

import PBadge from '../../src/components/PBadge/PBadge.vue'

const meta = {
    title: 'Components/PBadge',
    component: PBadge,
    tags: ['autodocs'],
    argTypes: {
        tone: { control: 'select', options: ['info', 'success', 'attention', 'warning', 'critical'] },
        size: { control: 'select', options: ['medium', 'large'] },
        progress: { control: 'select', options: ['incomplete', 'partiallyComplete', 'complete'] },
    },
    args: {
        size: 'medium',
    },
} satisfies Meta<typeof PBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args, { argTypes }) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args"> Fullfilled </PBadge>',
    }),
}

export const Large: Story = {
    args: {
        size: 'large',
    },
    render: (args, { argTypes }) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args" size="large"> Fullfilled </PBadge>',
    }),
}

export const Informational: Story = {
    args: {
        tone: 'info',
    },
    render: (args, { argTypes }) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args" tone="info"> Draft </PBadge>',
    }),
}

export const Success: Story = {
    args: {
        tone: 'success',
    },
    render: (args, { argTypes }) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args" tone="success"> Active </PBadge>',
    }),
}

export const Attention: Story = {
    args: {
        tone: 'attention',
    },
    render: (args, { argTypes }) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args" tone="attention"> Open </PBadge>',
    }),
}

export const Warning: Story = {
    args: {
        tone: 'warning',
    },
    render: (args, { argTypes }) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args" tone="warning"> On hold </PBadge>',
    }),
}

export const Critical: Story = {
    args: {
        tone: 'critical',
    },
    render: (args, { argTypes }) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args" tone="critical"> Action required </PBadge>',
    }),
}

export const Incomplete: Story = {
    args: {
        tone: 'attention',
    },
    render: (args, { argTypes }) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args" tone="attention" progress="incomplete"> Unfulfilled </PBadge>',
    }),
}

export const PartiallyComplete: Story = {
    args: {
        tone: 'warning',
    },
    render: (args, { argTypes }) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args" tone="warning" progress="partiallyComplete"> Partially fulfilled </PBadge>',
    }),
}

export const Complete: Story = {
    args: {
        tone: 'success',
    },
    render: (args, { argTypes }) => ({
        components: { PBadge },
        setup() {
            return { args }
        },
        template: '<PBadge v-bind="args" tone="success" progress="complete"> Fulfilled </PBadge>',
    }),
}
