import type {Meta, StoryObj} from '@storybook/vue3';

import PPage from "../../src/components/PPage.vue";

const meta = {
    title: 'Components/PPage',
    component: PPage,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof PPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => ({
        components: {PPage},
        setup() {
            return {args}
        },
        template: '<PPage v-bind="args"> ciao </PPage>'
    })
};