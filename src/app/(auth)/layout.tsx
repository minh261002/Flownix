import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Layout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <div className='bg-muted flex min-h-svh min-w-svw flex-col justify-center items-center gap-6 p-6 md:p-10'>
            <div className='flex flex-col gap-6 w-full max-w-sm'>
                <Link href='/' className='flex items-center gap-2 self-center font-medium text-2xl'>
                    <Image src='/logo.svg' alt='logo' width={50} height={50} />
                    Flownix
                </Link>
                {children}
            </div>
        </div>
    )
}

export default Layout