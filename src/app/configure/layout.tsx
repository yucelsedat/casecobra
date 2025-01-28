import MaxWidthWrapper from '@/components/max-width-wrapper'
import React, { ReactNode } from 'react'

export default function Layout({children}: {children: ReactNode}) {
  return (
    <MaxWidthWrapper className='flex-1 flex flex-col'>
      {children}
    </MaxWidthWrapper>
  )
}
