'use client'

import { TextInput } from "@/modules/auth/components/TextInput"
import { Button } from "@/modules/shared/components/Button"
import { useSignUpCardController } from "./useSignUpCardController"

export const SignUpCard = () => {
  const {
    handleChangeEmail,
    handleChangeName,
    handleChangePassword,
    handleSubmit
  } = useSignUpCardController()

  return (
    <div className="flex flex-col gap-y-2 w-96 bg-gray-100 shadow-md rounded-md p-7">
      <TextInput placeholder="Email" onChange={handleChangeEmail} />
      <TextInput placeholder="Name" onChange={handleChangeName} />
      <TextInput placeholder="Password" onChange={handleChangePassword} />
      <Button type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  )
}
