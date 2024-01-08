import type { Meta, StoryObj } from '@storybook/vue3'
import { PTabs, PText, PCard } from '../../src'
import { ref } from 'vue'

const meta: Meta<typeof PTabs> = {
    title: 'Components/PTabs',
    component: PTabs,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        tabs: [
            {
                id: 'all-customers-1',
                content: 'All',
                accessibilityLabel: 'All customers',
                panelID: 'all-customers-content-1',
            },
            {
                id: 'accepts-marketing-1',
                content: 'Accepts marketing',
                panelID: 'accepts-marketing-content-1',
            },
            {
                id: 'repeat-customers-1',
                content: 'Repeat customers',
                panelID: 'repeat-customers-content-1',
            },
            {
                id: 'prospects-1',
                content: 'Prospects',
                panelID: 'prospects-content-1',
            },
        ],
    },
    render: (args) => ({
        components: { PTabs, PText },
        setup() {
            const selected = ref(0)

            const onSelected = (index: number) => {
                selected.value = index
            }

            return { args, selected, onSelected }
        },
        template:
            '<PTabs v-bind="args" :selected="selected" @select="(index) => onSelected(index)"><template #panel><PText>Tab {{selected}} selected</PText></template></PTabs>',
    }),
}

export const InsideOfACard: Story = {
    args: {
        tabs: [
            {
                id: 'all-customers-1',
                content: 'All',
                accessibilityLabel: 'All customers',
                panelID: 'all-customers-content-1',
            },
            {
                id: 'accepts-marketing-1',
                content: 'Accepts marketing',
                panelID: 'accepts-marketing-content-1',
            },
            {
                id: 'repeat-customers-1',
                content: 'Repeat customers',
                panelID: 'repeat-customers-content-1',
            },
            {
                id: 'prospects-1',
                content: 'Prospects',
                panelID: 'prospects-content-1',
            },
        ],
    },
    render: (args) => ({
        components: { PTabs, PText, PCard },
        setup() {
            const selected = ref(0)

            const onSelected = (index: number) => {
                selected.value = index
            }

            return { args, selected, onSelected }
        },
        template:
            '<PCard><PTabs v-bind="args" :selected="selected" @select="(index) => onSelected(index)"><template #panel><PText>Tab {{selected}} selected</PText></template></PTabs></PCard>',
    }),
}

export const Fitted: Story = {
    args: {
        tabs: [
            {
                id: 'all-customers-1',
                content: 'All',
                accessibilityLabel: 'All customers',
                panelID: 'all-customers-content-1',
            },
            {
                id: 'accepts-marketing-1',
                content: 'Accepts marketing',
                panelID: 'accepts-marketing-content-1',
            },
        ],
    },
    render: (args) => ({
        components: { PTabs, PText, PCard },
        setup() {
            const selected = ref(0)

            const onSelected = (index: number) => {
                selected.value = index
            }

            return { args, selected, onSelected }
        },
        template:
            '<PCard><PTabs v-bind="args" :selected="selected" fitted @select="(index) => onSelected(index)"><template #panel><PText>Tab {{selected}} selected</PText></template></PTabs></PCard>',
    }),
}

export const WithBadgeContent: Story = {
    args: {
        tabs: [
            {
                id: 'all-customers-fitted-3',
                content: 'All',
                badge: '10+',
                accessibilityLabel: 'All customers',
                panelID: 'all-customers-fitted-content-3',
            },
            {
                id: 'accepts-marketing-fitted-3',
                content: 'Accepts marketing',
                badge: '4',
                panelID: 'accepts-marketing-fitted-content-3',
            },
        ],
    },
    render: (args) => ({
        components: { PTabs, PText, PCard },
        setup() {
            const selected = ref(0)

            const onSelected = (index: number) => {
                selected.value = index
            }

            return { args, selected, onSelected }
        },
        template:
            '<PCard><PTabs v-bind="args" :selected="selected" @select="(index) => onSelected(index)"><template #panel><PText>Tab {{selected}} selected</PText></template></PTabs></PCard>',
    }),
}
