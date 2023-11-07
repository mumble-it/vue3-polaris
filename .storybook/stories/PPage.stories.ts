import type {Meta, StoryObj} from '@storybook/vue3';

import PPage from "../../src/components/PPage.vue";
import PBadge from "../../src/components/PBadge/PBadge.vue";
import {PCard, PText} from "../../src";

const meta = {
    title: 'Components/PPage',
    component: PPage,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof PPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: '3/4 inch Leather pet collar',
        subtitle: 'Perfect for any pet',
        backAction: { onAction: () => false },
        primaryAction: {content: "Save"},
        secondaryActions:
            [
                {
                    content: "Duplicate",
                    accessibilityLabel: "Secondary action label",
                    onAction: () => alert("Duplicate action")
                },
            ]
    },
    render: (args) => ({
        components: {PPage, PBadge, PCard, PText},
        setup() {
            return {args}
        },
        template: `
            <PPage v-bind="args">
                <template #titleMetadata>
                    <PBadge tone="success">Paid</PBadge>
                </template>

                <PCard title="Credit card">
                    <PText variant="headingSm" style="margin-bottom: 10px">Credit card information</PText>
                    <PText>Credit card information</PText>
                </PCard>
            </PPage>`
    })
};