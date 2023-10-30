import type {Meta, StoryObj} from '@storybook/vue3';

import PButton from "../../src/components/PButton.vue";
import PTextField from "../../src/components/PTextField.vue";
import {TEXT_FIELD_TYPES} from "../../src/constants/text-field.constants";


const meta = {
    title: 'Components/PTextField',
    component: PTextField,
    tags: ['autodocs'],
    args: {
        type: 'text',
    },
    argTypes: {
        autocomplete: { control: 'text' },
        inputMode: { control: 'text' },
        type: { control: 'select', options: TEXT_FIELD_TYPES},
        value: {
            control: 'text', table: {
                type: {summary: 'string | number | null'}
            }
        },
        'onUpdate:value': {action: 'update:value'},
    },
} satisfies Meta<typeof PTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Store Name',
        value: 'Mumble'
    },
    render: (args) => ({
        components: {PTextField},
        setup() {
            return {args}
        },
        template: '<PTextField v-bind="args" v-model:value="args.value" />'
    })
};

export const Number: Story = {
    args: {
        label: 'Quantity',
        value: 1,
        type: 'number'
    },
    render: (args) => ({
        components: {PTextField},
        setup() {
            return {args}
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
        components: {PTextField},
        setup() {
            return {args}
        },
        template: '<PTextField v-bind="args" />'
    })
};

export const Prefix: Story = {
    args: {
        label: 'Quantity',
        value: 1,
        type: 'number'
    },
    render: (args) => ({
        components: {PTextField},
        setup() {
            return {args}
        },
        template: '<PTextField v-bind="args"> <template #prefix> $ </template> </PTextField>'
    })
};

export const Suffix: Story = {
    args: {
        label: 'Quantity',
        value: 1,
        type: 'number'
    },
    render: (args) => ({
        components: {PTextField},
        setup() {
            return {args}
        },
        template: '<PTextField v-bind="args"> <template #suffix> $ </template> </PTextField>'
    })
};

export const LabelAction: Story = {
    args: {
        label: 'Tariff code',
        value: '6201.11.0000',
        action: {content: 'Look up codes'}
    },
    render: (args) => ({
        components: {PTextField},
        setup() {
            return {args}
        },
        template: '<PTextField v-bind="args"> <template #suffix> $ </template> </PTextField>'
    })
};

export const Disabled: Story = {
    args: {
        label: 'StoreName',
        disabled: true,
        autoComplete: 'off',
    },
    render: (args) => ({
        components: {PTextField},
        setup() {
            return {args}
        },
        template: '<PTextField v-bind="args" />'
    })
};

export const Error: Story = {
    args: {
        label: 'StoreName',
        error: 'Store name is required',
    },
    render: (args) => ({
        components: {PTextField},
        setup() {
            return {args}
        },
        template: '<PTextField v-bind="args" />'
    })
};

export const HelpText: Story = {
    args: {
        label: 'Account email',
        placeholder: 'mu@mb.le',
        helpText: 'We’ll use this address if we need to contact you about your account.',
    },
    render: (args) => ({
        components: {PTextField},
        setup() {
            return {args}
        },
        template: '<PTextField v-bind="args" />'
    })
};

export const ConnectedFields: Story = {
    args: {
        label: 'Weight',
        type: 'number',
        value: 10.6,
    },
    render: (args) => ({
        components: {PTextField, PButton},
        setup() {
            return {args}
        },
        template: `
            <PTextField v-bind="args">
                <template #connectedLeft>
                    <select name="" id="">
                        <option selected> kg</option>
                        <option> lb</option>
                    </select>
                </template>
                <template #connectedRight>
                    <PButton> Submit</PButton>
                </template>
            </PTextField>`
    })
};