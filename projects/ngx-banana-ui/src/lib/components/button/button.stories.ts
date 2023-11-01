import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;


export const Primary: Story = {
  args: {
    label: 'Default Button',
  },
};

export const Active: Story = {
  args: {
    label: 'Active Button',
    type: 'active'
  }
}

