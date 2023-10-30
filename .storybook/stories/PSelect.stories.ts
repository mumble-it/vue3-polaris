import type { Meta, StoryObj } from '@storybook/vue3'

import PSelect from '../../src/components/PSelect.vue'

const meta = {
    title: 'Components/PSelect',
    component: PSelect,
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        size: 'medium',
    },
} satisfies Meta<typeof PSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Date range',
        value: 'today',
        options: [
            {label: 'Today', value: 'today'},
            {label: 'Yesterday', value: 'yesterday'},
            {label: 'Last 7 days', value: 'lastWeek'},
        ]
    },
    render: (args, { argTypes }) => ({
        components: { PSelect },
        setup() {
            return { args }
        },
        template: '<PSelect v-bind="args" v-model:value="args.value" /> ',
    }),
}