import { Slot } from "@radix-ui/react-slot"

export interface ButtonProps {
  children: React.ReactNode
  asChild?: boolean
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp className="text-black text-sm w-full outline-none font-semibold px-4 py-3 rounded bg-cyan-500 transition-all hover:bg-cyan-300 focus:ring-2 ring-gray-100">
      {children}
    </Comp>
  )
}
