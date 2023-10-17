import type { Meta, StoryObj } from '@storybook/vue3';

import PText from '../../src/components/PText.vue';

const meta = {
  title: 'Components/PText',
  component: PText,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'select', options: [ 'dt' , 'dd' , 'h1' , 'h2' , 'h3' , 'h4' , 'h5' , 'h6' , 'p' , 'span', 'strong', 'legend' ] },
    alignment: { control: 'select', options: [ 'start', 'center', 'end', 'justify' ] },
    tone: { control: 'select', options: [ 'success', 'critical', 'caution', 'subdued', 'text-inverse' ] },
    fontWeight: { control: 'select', options: [ 'regular', 'medium', 'semibold', 'bold' ] },
    textDecorationLine: { control: 'select', options: [ 'line-through' ] },
    variant: { control: 'select', options: [ 'headingSm' , 'headingMd' , 'headingLg' , 'headingXl' , 'heading2xl' , 'heading3xl' , 'bodySm' , 'bodyMd' , 'bodyLg' ] },
  },
} satisfies Meta<typeof PText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: {PText},
    setup() {
      return { args }
    },
    template: '<PText v-bind="args"> Shopify POS is the easiest way to sell your products in person.\n' +
        '        Available for iPad, iPhone, and Android. </PText>'
  })
};

export const BodySmall: Story = {
  args: {
    variant: 'bodySm'
  },
  render: (args) => ({
    components: {PText},
    setup() {
      return { args }
    },
    template: '<PText v-bind="args"> Shopify POS is the easiest way to sell your products in person.\n' +
        '        Available for iPad, iPhone, and Android. </PText>'
  })
};

export const BodyMedium: Story = {
  render: () => ({
    components: {PText},
    template: '<PText> Shopify POS is the easiest way to sell your products in person.\n' +
        '        Available for iPad, iPhone, and Android. </PText>'
  })
};

export const BodyLarge: Story = {
  args: {
    variant: 'bodyLg'
  },
  render: (args) => ({
    components: {PText},
    setup() {
      return { args }
    },
    template: '<PText v-bind="args"> Shopify POS is the easiest way to sell your products in person.\n' +
        '        Available for iPad, iPhone, and Android. </PText>'
  })
};

export const HeadingSm: Story = {
  args: {
    variant: 'headingSm',
    as: 'h5',
  },
  render: (args) => ({
    components: {PText},
    setup() {
      return { args }
    },
    template: '<PText v-bind="args"> Shopify POS is the easiest way to sell your products in person.\n' +
        '        Available for iPad, iPhone, and Android. </PText>'
  })
};

export const HeadingMd: Story = {
  args: {
    variant: 'headingMd',
    as: 'h4',
  },
  render: (args) => ({
    components: {PText},
    setup() {
      return { args }
    },
    template: '<PText v-bind="args"> Shopify POS is the easiest way to sell your products in person.\n' +
        '        Available for iPad, iPhone, and Android. </PText>'
  })
};


export const HeadingXl: Story = {
  args: {
    variant: 'headingXl',
    as: 'h3',
  },
  render: (args) => ({
    components: {PText},
    setup() {
      return { args }
    },
    template: '<PText v-bind="args"> Shopify POS is the easiest way to sell your products in person.\n' +
        '        Available for iPad, iPhone, and Android. </PText>'
  })
};

export const Heading2xl: Story = {
  args: {
    variant: 'heading2xl',
    as: 'h2',
  },
  render: (args) => ({
    components: {PText},
    setup() {
      return { args }
    },
    template: '<PText v-bind="args"> Shopify POS is the easiest way to sell your products in person.\n' +
        '        Available for iPad, iPhone, and Android. </PText>'
  })
};

export const Heading3xl: Story = {
  args: {
    variant: 'heading3xl',
    as: 'h1',
  },
  render: (args) => ({
    components: {PText},
    setup() {
      return { args }
    },
    template: '<PText v-bind="args"> Shopify POS is the easiest way to sell your products in person.\n' +
        '        Available for iPad, iPhone, and Android. </PText>'
  })
};
