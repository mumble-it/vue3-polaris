import type { Meta, StoryObj } from '@storybook/vue3'

import PBanner from '../../src/components/Pbanner.vue'
import { PText } from '../../src'

const meta = {
    title: 'Components/PBanner',
    component: PBanner,
    tags: ['autodocs'],
    args: {
        onActionAnyItem: () => {},
    },
    argTypes: {
        tone: { control: 'select', options: ['info', 'success', 'warning', 'critical'] },
        title: { control: 'text' },
        hideIcon: { control: 'boolean' },
        stopAnnouncements: { control: 'boolean' },
        dismissible: { control: 'boolean' },
    },
} satisfies Meta<typeof PBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => ({
        components: { PBanner, PText },
        setup() {
            return { args }
        },
        template:
            '<PBanner v-bind="args"><PText>Use your finance report to get detailed information about your business.</PText></PBanner>',
    }),
}

export const Informational: Story = {
    args: {
        tone: 'info',
        title: 'USPS has updated their rates',
        action: { content: 'Update rates', onAction: () => {} },
        secondaryAction: { content: 'Learn more', onAction: () => {} },
    },
    render: (args) => ({
        components: { PBanner, PText },
        setup() {
            return { args }
        },
        template:
            '<PBanner v-bind="args"><PText>Make sure you know how these changes affect your store.</PText></PBanner>',
    }),
}

export const Success: Story = {
    args: {
        tone: 'success',
        title: 'Your shipping label is ready to print.',
        action: { content: 'Print label', onAction: () => {} },
    },
    render: (args) => ({
        components: { PBanner, PText },
        setup() {
            return { args }
        },
        template: '<PBanner v-bind="args"></PBanner>',
    }),
}

export const Warning: Story = {
    args: {
        tone: 'warning',
        title: 'Before you can purchase a shipping label, this change needs to be made:',
        action: { content: 'Edit address', onAction: () => {} },
    },
    render: (args) => ({
        components: { PBanner, PText },
        setup() {
            return { args }
        },
        template:
            '<PBanner v-bind="args"><PText>The name of the city you’re shipping to has characters that aren’t allowed. City name can only include spaces and hyphens.</PText></PBanner>',
    }),
}

export const Critical: Story = {
    args: {
        tone: 'critical',
        title: 'High risk of fraud detected',
        action: { content: 'Review risk analysis', onAction: () => {} },
    },
    render: (args) => ({
        components: { PBanner, PText },
        setup() {
            return { args }
        },
        template:
            '<PBanner v-bind="args"><PText>Before fulfilling this order or capturing payment, please review the Risk Analysis and determine if this order is fraudulent.</PText></PBanner>',
    }),
}
