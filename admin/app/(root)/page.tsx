import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {UserButton , SignedOut} from '@clerk/nextjs'

export default function Home() {
  return (
    <div className='p-4 h-full'>
      <h2> HEllo world</h2>
      <Button variant={'outline'} size={'sm'}>Click Me</Button>
      <UserButton afterSignOutUrl='/' />
      <SignedOut />
    </div>
  )
}
