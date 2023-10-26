import type { Meta, StoryObj } from '@storybook/vue3'

import PBanner from '../../src/components/PBanner.vue'
import PText from '../../src/components/PText.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'Components/PBanner',
    component: PBanner,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        tone: { control: 'select', options: ['info', 'success', 'warning', 'critical'] },
        title: { control: 'text' },
        hideIcon: { control: 'booolean' },
        stopAnnouncements: { control: 'boolean' },
        dismissible: { control: 'boolean' },
    },
    args: {
        tone: 'info',
        title: 'USPS has updated their rates\n',
        dismissible: true,
        action: { content: 'Update rates', onAction: () => {} },
        secondaryAction: { content: 'Learn more', onAction: () => {} },
    }, // default value
} satisfies Meta<typeof PBanner>

export default meta
type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

export const Default: Story = {
    render: (args, { argTypes }) => ({
        components: { PBanner },
        setup() {
            return { args }
        },
        template: '<PBanner v-bind="args"></PBanner>',
    }),
}

/*
export const Success: Story = {
    render: (args, { argTypes }) => ({
        components: { PBanner },
        setup() {
            return { args }
        },
        template:
            '<PBanner v-bind="args" tone="success" title="Your shipping label is ready to print." dismissible></PBanner>',
    }),
}

export const Warning: Story = {
    render: (args, { argTypes }) => ({
        components: { PBanner },
        setup() {
            return { args }
        },
        template:
            '<PBanner v-bind="args" tone="warning" title="Before you can purchase a shipping label, this change needs to be made:" dismissible></PBanner>',
    }),
}

export const Critical: Story = {
    render: (args, { argTypes }) => ({
        components: { PBanner },
        setup() {
            return { args }
        },
        template: '<PBanner v-bind="args" tone="critical" title="High risk of fraud detected" dismissible></PBanner>',
    }),
}
*/
