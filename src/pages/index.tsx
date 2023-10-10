import { Button } from '@/shared/ui'
import { OurCustomers } from '@/widgets/our-customers'

export default function Home() {
  return (
    <>
      <OurCustomers/>
      <Button type='primary'>Button</Button>
      <Button type='bordered'>Button</Button>
      <Button type='primary' size='small'>Button</Button>
    </>
  )
}
