import type { Meta, StoryObj } from '@storybook/vue3';

import {ref} from "vue";
import PButton from "../../src/components/PButton.vue";
import PPopover from "../../src/components/PPopover.vue";
import {PText} from "../../src";
import PPopoverPane from "../../src/components/PPopoverPane.vue";
import PActionList from "../../src/components/PActionList.vue";

const meta = {
  title: 'Components/PPopover',
  component: PPopover,
  tags: ['autodocs'],
  args: {
      preferredAlignment: 'center',
      autofocusTarget: 'container',
  },
  argTypes: {
    preferredAlignment: { control: 'select', options: ['left','center','right'] },
    autofocusTarget: { control: 'select', options: ['node','first-node','container'] },
    default: {
      control: 'text', table: {
        type: { summary: 'The activator' },
      }
    },
    content: {
      control: 'text', table: {
        type: { summary: 'The popover content' },
      }
    }
  },
} satisfies Meta<typeof PPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: {PActionList, PPopover, PButton, PPopoverPane, PText},
    setup() {
      const isActive = ref(false)
      const onClick = () => args.active = !args.active

      return { args, isActive, onClick }
    },
    template: `<PPopover v-bind="args" v-model:active="args.active">
      <PButton disclosure @click="onClick"> Sales channels </PButton>

      <template #content>
        <PPopoverPane fixed subdued sectioned>
          <PText font-weight="medium"> Available sales channels </PText>
        </PPopoverPane>
        <PPopoverPane>
          <PActionList
            :items="[{ content: 'Import' }, { content: 'Export' }]"
          />
        </PPopoverPane>
      </template>
    </PPopover>`
  })
};