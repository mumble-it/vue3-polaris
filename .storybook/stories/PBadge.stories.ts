import type { Meta, StoryObj } from '@storybook/vue3'

import PBadge from '../../src/components/PBadge.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'Components/PBadge',
    component: PBadge,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        tone: { control: 'select', options: ['info', 'success', 'attention', 'warning', 'critical'] },
        size: { control: 'select', options: ['medium', 'large'] },
    },
    args: {
        size: 'medium',
    }, // default value
} satisfies Meta<typeof PBadge>

export default meta
type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
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
