import { prisma } from "@/db"
import { Button } from "@/modules/shared/components/Button"
import { capitalize } from "@/modules/shared/utils/capitalize"
import { IHomePageProps } from "./types"

export const HomePage = async (props: IHomePageProps) => {
  const users = await prisma.user.findMany()
  const products = await prisma.product.findMany()
  let user

  if (props.searchParams.userId) {
    user = await prisma.user.findById(props.searchParams.userId)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-y-2">
        {user ? (
          <h1 className="text-3xl">Welcome {user.name}</h1>
        ) : (
          <h1 className="text-3xl">React Arch</h1>
        )}
        <Button>Getting Started</Button>
        <ul className="mt-6">
          {products.map((product) => (
            <li key={product.name}>{capitalize(product.name)}</li>
          ))}
        </ul>

        <ul className="mt-6">
          {users.map((user) => (
            <li key={user.name}>{capitalize(user.name)}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}
