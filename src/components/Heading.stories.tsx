import { Meta, StoryObj } from "@storybook/react"
import { Heading, HeadingProps } from "./Heading"

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    size: "md",
    children: "Hello World"
  },
  argTypes: {
    size: {
      control: {
        type: "inline-radio"
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm"
  }
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg"
  }
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h3>Custom Component - h3</h3>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}
