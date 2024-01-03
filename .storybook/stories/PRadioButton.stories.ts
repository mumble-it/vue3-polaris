import type { Meta, StoryObj } from '@storybook/vue3'
import PRadioButton from '../../src/components/PRadioButton.vue'
import { ref } from 'vue'

const meta: Meta<typeof PRadioButton> = {
    title: 'Components/PRadioButton',
    component: PRadioButton,
    tags: ['autodocs'],
    argTypes: {
        ariaDescribedBy: { control: 'text' },
        label: { control: 'text' },
        labelHidden: { control: 'boolean' },
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
        id: { control: 'text' },
        name: { control: 'text' },
        value: { control: 'text' },
        fill: { control: 'boolean' },
        helpText: { control: 'text' },
        tone: { control: 'select', options: ['magic'] },
    },
}

export default meta
type Story = StoryObj<typeof PRadioButton>

export const Default: Story = {
    args: {
        label: 'Accounts are disabled',
        helpText: 'Customers will only be able to check out as guests.',
        id: 'disabled',
    },
    render: (args) => ({
        components: { PRadioButton },
        setup() {
            const checked = ref('')
            const onClick = (val: string) => {
                checked.value = val
            }
            return { args, onClick, checked }
        },
        template:
            '<PRadioButton v-bind="args" :checked="checked === `disabled`" @radioClick="(val) => onClick(val)" />',
    }),
}
