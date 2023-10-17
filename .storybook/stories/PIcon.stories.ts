import type { Meta, StoryObj } from '@storybook/vue3';

import PIcon from '../../src/components/PIcon.vue';

const meta = {
  title: 'Components/PIcon',
  component: PIcon,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'large']}
  },
} satisfies Meta<typeof PIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
     name: 'HeartMajor'
  },
  render: (args) => ({
    components: {PIcon},
    setup() {
      return { args }
    },
    template: '<PIcon v-bind="args" />'
  })
};