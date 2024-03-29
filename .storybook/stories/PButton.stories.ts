import type { Meta, StoryObj } from '@storybook/vue3';

import PButton from '../../src/components/PButton.vue';
import PText from '../../src/components/PText.vue';
import { SearchMinor } from '../../src/icons'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Components/PButton',
  component: PButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: [ 'medium', 'large' ] },
    textAlign: { control: 'select', options: [ 'center', 'left', 'right' ] },
    tone: { control: 'select', options: [ 'critical', 'success' ] },
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
  render: (args, { argTypes }) => ({
    components: {PButton, PText},
    setup() {
      return { args }
    },
    template: '<PButton v-bind="args"><PText> Add product </PText></PButton>'
  })
};

export const Large: Story = {
  args: {
    size: 'large'
  },
  render: (args, { argTypes }) => ({
    components: {PButton, PText},
    setup() {
      return { args }
    },
    template: `<PButton v-bind="args"> 
      <PText> Create Store </PText> 
    </PButton>`
  })
};

export const Primary: Story = {
  args: {
    variant: 'primary'
  },
  render: (args, { argTypes }) => ({
    components: {PButton, PText},
    setup() {
      return { args }
    },
    template: '<PButton v-bind="args"><PText> Save theme </PText></PButton>'
  })
};

export const PrimarySuccess: Story = {
  args: {
    variant: 'primary',
    tone: 'success'
  },
  render: (args, { argTypes }) => ({
    components: {PButton, PText},
    setup() {
      return { args }
    },
    template: '<PButton v-bind="args"> <PText>Save</PText> </PButton>'
  })
};

export const PrimaryCritical: Story = {
  args: {
    variant: 'primary',
    tone: 'critical'
  },
  render: (args, { argTypes }) => ({
    components: {PButton, PText},
    setup() {
      return { args }
    },
    template: '<PButton v-bind="args"> <PText>Remove</PText> </PButton>'
  })
};

export const Plain: Story = {
  args: {
    variant: 'plain'
  },
  render: (args, { argTypes }) => ({
    components: {PButton, PText},
    setup() {
      return { args }
    },
    template: '<PButton v-bind="args"><PText> View shipping settings </PText></PButton>'
  })
};

export const PlainCritical: Story = {
  args: {
    variant: 'plain',
    tone: 'critical',
  },
  render: (args, { argTypes }) => ({
    components: {PButton, PText},
    setup() {
      return { args }
    },
    template: '<PButton v-bind="args"> <PText>Remove</PText> </PButton>'
  })
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary'
  },
  render: (args, { argTypes }) => ({
    components: {PButton, PText},
    setup() {
      return { args }
    },
    template: '<PButton v-bind="args"><PText> View shipping settings </PText></PButton>'
  })
};

export const FullWidth: Story = {
  args: {
    fullWidth: true
  },
  render: (args, { argTypes }) => ({
    components: {PButton, PText},
    setup() {
      return { args }
    },
    template: '<PButton v-bind="args"><PText> Add customer </PText></PButton>'
  })
};

export const Loading: Story = {
  args: {
    loading: true
  },
  render: (args, { argTypes }) => ({
    components: {PButton, PText},
    setup() {
      return { args }
    },
    template: '<PButton v-bind="args"> <PText>Loading</PText> </PButton>'
  })
};

export const Icon: Story = {
  args: {
    icon: SearchMinor
  },
  render: (args, { argTypes }) => ({
    components: {PButton, PText},
    setup() {
      return { args }
    },
    template: '<PButton v-bind="args"> <PText>Search</PText> </PButton>'
  })
};