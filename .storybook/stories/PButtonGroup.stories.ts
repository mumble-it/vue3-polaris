import type { Meta, StoryObj } from '@storybook/vue3'

import PButtonGroup from '../../src/components/PButtonGroup.vue'
import { PButton } from '../../src'

const meta: Meta<typeof PButtonGroup> = {
    title: 'Components/PButtonGroup',
    component: PButtonGroup,
    tags: ['autodocs'],
    argTypes: {
        gap: { control: 'select', options: ['loose', 'tight', 'extraTight'] },
        segmented: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        connectedTop: { control: 'boolean' },
        noWrap: { control: 'boolean' },
    },
}

export default meta
type Story = StoryObj<typeof PButtonGroup>

export const Default: Story = {
    render: (args) => ({
        components: { PButtonGroup, PButton },
        setup() {
            return { args }
        },
        template: '<PButtonGroup v-bind="args"> <PButton>Cancel</PButton> <PButton>Save</PButton> </PButtonGroup>',
    }),
}

export const Segmented: Story = {
    args: {
        segmented: true,
    },
    render: (args) => ({
        components: { PButtonGroup, PButton },
        setup() {
            return { args }
        },
        template:
            '<PButtonGroup v-bind="args"> <PButton>Bold</PButton> <PButton>Italic</PButton> <PButton>Underline</PButton> </PButtonGroup>',
    }),
}

export const ConnectedTop: Story = {
    args: {
        connectedTop: true,
    },
    render: (args) => ({
        components: { PButtonGroup, PButton },
        setup() {
            return { args }
        },
        template:
            '<PButtonGroup v-bind="args"> <PButton>Bold</PButton> <PButton>Italic</PButton> <PButton>Underline</PButton> </PButtonGroup>',
    }),
}
