import type { Meta, StoryObj } from '@storybook/vue3'

import PCheckbox from '../../src/components/PCheckbox.vue'

const meta = {
    title: 'Components/PCheckbox',
    component: PCheckbox,
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        size: 'medium',
    },
} satisfies Meta<typeof PCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args, { argTypes }) => ({
        components: { PCheckbox },
        setup() {
            return { args }
        },
        template: '<PCheckbox v-bind="args" v-model:checked="args.checked"> Basic Checkbox </PCheckbox>',
    }),
}