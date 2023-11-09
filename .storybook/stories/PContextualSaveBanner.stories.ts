import type { Meta, StoryObj } from '@storybook/vue3'

import PContextualSaveBanner from '../../src/components/PContextualSaveBanner.vue'
import {ref} from "vue";

const meta = {
    title: 'Components/PContextualSaveBanner',
    component: PContextualSaveBanner,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof PContextualSaveBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        message: 'Unsave changes',
        saveAction: {
            onAction: () => console.log('Save'),
        },
        discardAction: {
            onAction: () => console.log('Discard'),
        }
    },
    render: (args, { argTypes }) => ({
        components: { PContextualSaveBanner },
        setup() {
            const show = ref(false)

            setTimeout(() => {
                show.value = true
            }, 1000)
            return { args, show }
        },
        template: `<div>
            <PContextualSaveBanner :show="show" v-bind="args" />
            
        </div>`,
    }),
}