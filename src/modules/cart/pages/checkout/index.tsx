import { BreadCrumb } from "@/modules/shared/components/BreadCrumb"
import { Button } from "@/modules/shared/components/Button"

export const CheckoutPage = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Cart', link: '/cart' },
    { label: 'Checkout', link: '/cart/checkout' }
  ]

  return (
    <main>
      Checkout
      <BreadCrumb breadcrumbs={breadcrumbs} />
      <Button>Complete payment</Button>
    </main>
  )
}
