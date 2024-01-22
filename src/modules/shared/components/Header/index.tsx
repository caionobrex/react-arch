import Link from "next/link"
import { IHeaderProps } from "./types"
import { MenuList } from "./components/MenuList"

export const Header = ({ hideMenu }: IHeaderProps) => {
  return (
    <header className="bg-gray-900 text-white px-10 py-4 shadow-md flex items-center justify-between">
      <Link href="/">Home</Link>
      {hideMenu ? null : <MenuList />}
    </header>
  )
}
