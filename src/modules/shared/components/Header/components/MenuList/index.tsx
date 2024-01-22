import Link from "next/link"

export const MenuList = () => (
  <ul className="flex items-center gap-x-5">
    <li><Link href="/auth/signin">Sign In</Link></li>
    <li><Link href="/auth/signup">Sign Up</Link></li>
  </ul>
)
  