import Link from "next/link"
import { IBreadCrumbProps } from "./types"

export const BreadCrumb = ({ breadcrumbs }: IBreadCrumbProps) => {
  return (
    <ul className="flex items-center gap-x-2">
      {breadcrumbs.map((bread) => (
        <li key={bread.link}>
          <Link href={bread.link}>{bread.label}</Link>
        </li>
      ))}
    </ul>
  )
}