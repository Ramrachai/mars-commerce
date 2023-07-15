import React from 'react'

export default function AuthLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='mt-5 flex justify-center items-center h-full w-full'>
        {children}
    </div>
  )
}
