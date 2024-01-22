import { AuthService } from "@/modules/auth/services/auth"
import { isValidEmail } from "@/modules/auth/utils/isValidEmail"
import { useState } from "react"

export const useSignInCardController = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

  const handleSubmit = () => {
    if (!isValidEmail(email)) {
      console.log('Invalid email')
      return
    }
    AuthService.signIn(email, password)
  }

  return { handleChangeEmail, handleChangePassword, handleSubmit }
}