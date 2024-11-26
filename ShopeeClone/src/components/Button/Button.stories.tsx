import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from './Button'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  argTypes: {
    isLoading: { description: 'Hiển thị loading' },
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryCom: Story = {
  args: {
    isLoading: true,
    className:
      'flex w-full items-center justify-center bg-red-500 px-2 py-4 text-sm uppercase text-white hover:bg-red-600',
    children: 'Đăng nhập',
    disabled: false
  }
}

export const SecondaryCom: Story = {
  args: {
    isLoading: false,
    className:
      'items-center justify-center bg-red-500 px-2 py-4 text-sm uppercase text-white hover:bg-red-600',
    children: 'Đăng ký',
    disabled: false
  }
}
