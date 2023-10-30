import type { Meta, StoryObj } from '@storybook/vue3'

import PSkeletonBodyText from '../../src/components/PSkeletonBodyText.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'Components/PSkeletonBodyText',
    component: PSkeletonBodyText,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        lines: { control: { type: 'number', min: 1, max: 10 } },
    },
    args: {
        onActionAnyItem: () => {},
    },
} satisfies Meta<typeof PSkeletonBodyText>

export default meta
type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

export const Default: Story = {
    render: (args, { argTypes }) => ({
        components: { PSkeletonBodyText },
        setup() {
            return { args }
        },
        template: '<PSkeletonBodyText v-bind="args" />',
    }),
}

export const SingleLine: Story = {
    render: (args, { argTypes }) => ({
        components: { PSkeletonBodyText },
        setup() {
            return { args }
        },
        template: '<PSkeletonBodyText v-bind="args" :lines="1" />',
    }),
}
