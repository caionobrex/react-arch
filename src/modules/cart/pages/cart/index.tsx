import { BreadCrumb } from "@/modules/shared/components/BreadCrumb"
import { capitalize } from "@/modules/shared/utils/capitalize"

export const CartPage = async () => {
  const breadcrumbs = [{ label: 'Home', link: '/' }, { label: 'Cart', link: '/cart' }]

  return (
    <main className="pt-4">
      <BreadCrumb breadcrumbs={breadcrumbs} />
      <h1 className="text-3xl text-center">{capitalize('cart')}</h1>
    </main>
  )
}
