import { IButtonProps } from "./types"

export const Button = ({ children, ...rest }: IButtonProps) => {
  return (
    <button {...rest}>{children}</button>
  )
}