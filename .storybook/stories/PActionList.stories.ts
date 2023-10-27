import type {Meta, StoryObj} from '@storybook/vue3';

import PActionList from '../../src/components/PActionList.vue';
import PPopover from "../../src/components/PPopover.vue";
import {ref} from "vue";
import {PButton, PText} from "../../src";
import PPopoverPane from "../../src/components/PPopoverPane.vue";

const meta = {
    title: 'Components/PActionList',
    component: PActionList,
    tags: ['autodocs'],
    args: {
        onActionAnyItem: () => {}
    },
    argTypes: {
        actionRole: {
            control: 'text',
            table: {
                type: {summary: "'menuitem' | string"}
            }
        },
        onActionAnyItem: {
            control: 'object',
            table: {
                type: {summary: "() => void"}
            }
        }
    },
} satisfies Meta<typeof PActionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            {
                content: 'Import',
            },
            {
                content: 'Export'
            }
        ]
    },
    render: (args) => ({
        components: {PActionList, PPopover, PButton, PPopoverPane, PText},
        setup() {
            const isActive = ref(false)
            const onClick = () => args.active = !args.active

            return { args, isActive, onClick }
        },
        template: `<PPopover  v-model:active="args.active">
            <PButton disclosure @click="onClick"> Sales channels </PButton>
            
            <template #content>
                <PPopoverPane fixed subdued sectioned>
                    <PText font-weight="medium"> Available sales channels </PText>
                </PPopoverPane>
                <PPopoverPane>
                    <PActionList v-bind="args" />
                </PPopoverPane>
            </template>
        </PPopover>`
    })
};
