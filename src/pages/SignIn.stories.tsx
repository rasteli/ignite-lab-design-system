import { Meta, StoryObj } from "@storybook/react"
import { within, userEvent, waitFor } from "@storybook/testing-library"
import { expect } from "@storybook/jest"
import { rest } from "msw"
import { SignIn } from "./SignIn"

export default {
  title: "Pages/SignIn",
  component: SignIn,
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "Login realizado!"
            })
          )
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const emailInput = canvas.getByPlaceholderText("johndoe@example.com")
    const passwordInput = canvas.getByPlaceholderText("********")
    const button = canvas.getByRole("button")

    userEvent.type(emailInput, "johndoe@email.com")
    userEvent.type(passwordInput, "supersenha")

    userEvent.click(button)

    await waitFor(() => {
      return expect(canvas.getByText("Login realizado!")).toBeInTheDocument()
    })
  }
}
