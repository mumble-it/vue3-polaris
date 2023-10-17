import type { Meta, StoryObj } from '@storybook/vue3';

import PSpinner from '../../src/components/PSpinner.vue';

const meta = {
  title: 'Components/PSpinner',
  component: PSpinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'large']}
  },
} satisfies Meta<typeof PSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: {PSpinner},
    setup() {
      return { args }
    },
    template: '<PSpinner v-bind="args" />'
  })
};