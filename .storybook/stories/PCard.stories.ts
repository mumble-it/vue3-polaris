import type {Meta, StoryObj} from '@storybook/vue3';

import PCard from '../../src/components/PCard.vue';
import {SPACES, BACKGROUNDS} from "../../src/constants";
import {PText} from "../../src";

const meta = {
    title: 'Components/PCard',
    component: PCard,
    tags: ['autodocs'],
    args: {
        background: 'bg-surface'
    },
    argTypes: {
        background: {control: 'select', options: BACKGROUNDS},
        padding: {
            control: 'select', options: SPACES, table: {
                type: {summary: 'SpaceScale | { [Breakpoint in Breakpoints]?: SpaceScale }'}
            }
        }
    },
} satisfies Meta<typeof PCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => ({
        components: {PCard, PText},
        setup() {
            return {args}
        },
        template: '<PCard v-bind="args"> <PText> Content inside a card </PText></PCard>'
    })
};