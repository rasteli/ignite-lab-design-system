import { Envelope, Lock } from "phosphor-react"

import { Text } from "./components/Text"
import { Heading } from "./components/Heading"
import { TextInput } from "./components/TextInput"

import "./styles/global.css"
import logo from "./assets/logo.svg"
import { Checkbox } from "./components/Checkbox"
import { Button } from "./components/Button"

export function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center justify-center">
        <img src={logo} alt="React logo" />

        <Heading size="lg" className="mt-4">
          Iginite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch mt-10 w-full max-w-sm">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id="email" type="email" placeholder="johndoe@example.com" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id="password" type="password" placeholder="********" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar-se de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          <Text className="text-black">Entrar na plataforma</Text>
        </Button>
      </form>

      <footer className="flex flex-col items-center justify-center mt-8 gap-3">
        <Text
          asChild
          size="sm"
          className="underline text-gray-400 hover:text-gray-200 transition-all"
        >
          <a href="">Esqueceu sua senha?</a>
        </Text>
        <Text
          asChild
          size="sm"
          className="underline text-gray-400 hover:text-gray-200 transition-all"
        >
          <a href="">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}
