import { Envelope, Lock } from "phosphor-react"
import { Meta, StoryObj } from "@storybook/react"
import { TextInput, TextInputRootProps } from "./TextInput"

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputRootProps>

export const Email: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input type="email" placeholder="johndoe@example.com" />
    ]
  }
}

export const Password: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Lock />
      </TextInput.Icon>,
      <TextInput.Input type="password" placeholder="*********" />
    ]
  }
}

export const DefaultNoIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input type="text" placeholder="Type something..." />
  }
}
