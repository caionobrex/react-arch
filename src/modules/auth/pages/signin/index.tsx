import { SignInCard } from "./components/SignInCard"

export const SignInPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-y-6">
      <h1 className="text-3xl">Sign in</h1>
      <SignInCard />
    </div>
  )
}