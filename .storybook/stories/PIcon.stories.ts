import type { Meta, StoryObj } from '@storybook/vue3'

import PIcon from '../../src/components/PIcon.vue'
import { HeartMajor } from '@/icons'
import { ICON_TONES } from '../../src/constants'

const meta = {
    title: 'Components/PIcon',
    component: PIcon,
    tags: ['autodocs'],
    args: {
        tone: 'base',
    },
    argTypes: {
        tone: { control: 'select', options: ICON_TONES },
    },
} satisfies Meta<typeof PIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        source: HeartMajor,
    },
    render: (args) => ({
        components: { PIcon },
        setup() {
            return { args }
        },
        template: '<PIcon v-bind="args" />',
    }),
}
