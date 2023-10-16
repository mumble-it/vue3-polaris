import type { Meta, StoryObj } from '@storybook/vue3';

import PButton from '../../src/components/PButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Components/PButton',
  component: PButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: [ 'medium', 'large' ] },
    textAlign: { control: 'select', options: [ 'center', 'left', 'right' ] },
    variant: { control: 'select', options: [ 'plain', 'primary', 'tertiary', 'monochromePlain' ] },
  },
  args: {
    size: 'medium',
  }, // default value
} satisfies Meta<typeof PButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
  },
  render: (args, { argTypes }) => ({
    components: {PButton},
    setup() {
      return { args }
    },
    template: '<PButton v-bind="args"> Add product </PButton>'
  })
};

export const Large: Story = {
  args: {
    size: 'large'
  },
  render: (args, { argTypes }) => ({
    components: {PButton},
    setup() {
      return { args }
    },
    template: '<PButton v-bind="args"> Add product </PButton>'
  })
};

export const Primary: Story = {
  args: {
    variant: 'primary'
  },
  render: (args, { argTypes }) => ({
    components: {PButton},
    setup() {
      return { args }
    },
    template: '<PButton v-bind="args"> Add product </PButton>'
  })
};

export const Plain: Story = {
  args: {
    variant: 'plain'
  },
  render: (args, { argTypes }) => ({
    components: {PButton},
    setup() {
      return { args }
    },
    template: '<PButton v-bind="args"> View shipping settings </PButton>'
  })
};