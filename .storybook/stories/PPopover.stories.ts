import type { Meta, StoryObj } from '@storybook/vue3';

import {ref} from "vue";
import PButton from "../../src/components/PButton.vue";
import PPopover from "../../src/components/PPopover.vue";

const meta = {
  title: 'Components/PPopover',
  component: PPopover,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof PPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: {PPopover, PButton},
    setup() {
      const isActive = ref(false)
      const onClick = () => args.active = !args.active

      return { args, isActive, onClick }
    },
    template: '<PPopover v-bind="args" v-model:active="args.active"> <PButton disclosure @click="onClick"> Sales channels </PButton> </PPopover>'
  })
};