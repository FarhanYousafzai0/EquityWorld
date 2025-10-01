import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='sticky top-0 z-50  w-full h-[70px] bg-gray-800'>

        <div className='flex justify-between items-center px-6 py-4 text-gray-500'>

        <Link href={`/`}>
        <Image src="/logo.svg" height={100} width={100} alt="Logo" />
        </Link>

            {/* NavItems */}
        </div>
    </div>
  )
}

export default Header