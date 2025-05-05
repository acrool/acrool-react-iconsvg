import Icon from './Icon';
import type {Meta, StoryObj} from '@storybook/react';
import styled from 'styled-components';
import {media} from '@acrool/react-grid';
import {EIconCode} from './SvgSymbol';




const meta = {
    title: 'Library/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'},
        docs: {
            description: {
                component: 'Custom skeleton by component'
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        code: 'logo_acrool',
        size: 100,
        color: '#bdbdbd',
    },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;





export const Primary: Story = {
    args: {
    },
};

export const Color: Story = {
    args: {
        color: 'green',
    },
};

export const ColorActiveWithIsActive: Story = {
    args: {
        isActive: true,
        activeColor: 'red',
    },
};
export const ColorActiveWithNotIsActive: Story = {
    args: {
        isActive: false,
        activeColor: 'red',
    },
};
export const ColorHover: Story = {
    args: {
        isActive: false,
        activeColor: 'red',
        hoverColor: 'blue',
    },
};
export const ColorHoverWithIsActive: Story = {
    args: {
        isActive: true,
        activeColor: 'red',
        hoverColor: 'blue',
    },
};

export const SizeWithNumber: Story = {
    args: {
        size: 200
    },
};



export const SizeWithRWD: Story = {
    args: {
        sm: 150,
        md: 200,
        lg: 250,
        xl: 300,
        xxl: 350,
    },
};


export const Route: Story = {
    args: {
        rotate: 90
    },
};

export const RouteWithAnimation: Story = {
    args: {
        code: EIconCode.loading,
        isRotateAnimation: true,
    },
};

export const OverrideSizeWithMd: Story = {
    render: function Render(args) {
        return <OverrideSize {...args}/>;
    },
};
export const OverrideColorWithYellow: Story = {
    render: function Render(args) {
        return <OverrideColor {...args}/>;
    },
};




const OverrideSize = styled(Icon)`
    ${media.md`
        height: 400px;
    `}
`;

const OverrideColor = styled(Icon)`
    color: yellow;
`;
