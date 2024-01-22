import { SignUpCard } from "./components/SignUpCard"

export const SignUpPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-y-6">
      <h1 className="text-3xl">Sign up</h1>
      <SignUpCard />
    </div>
  )
}