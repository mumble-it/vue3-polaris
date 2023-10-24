import type { Meta, StoryObj } from '@storybook/vue3';

import PTextField from "../../src/components/PTextField.vue";

const meta = {
  title: 'Components/PTextField',
  component: PTextField,
  tags: ['autodocs'],
  argTypes: {
    // size: { control: 'select', options: ['small', 'large']}
  },
} satisfies Meta<typeof PTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Store Name',
    value: 'Mumble',
  },
  render: (args) => ({
    components: { PTextField },
    setup() {
      return { args }
    },
    template: '<PTextField v-bind="args" />'
  })
};

export const Number: Story = {
  args: {
    label: 'Quantity',
    value: 1,
    type: 'number'
  },
  render: (args) => ({
    components: { PTextField },
    setup() {
      return { args }
    },
    template: '<PTextField v-bind="args" />'
  })
};

export const Multiline: Story = {
  args: {
    label: 'Shipping address',
    value: '1776 Barnes Street\n' +
        'Orlando, FL 32801',
    multiline: 4,
  },
  render: (args) => ({
    components: { PTextField },
    setup() {
      return { args }
    },
    template: '<PTextField v-bind="args" />'
  })
};