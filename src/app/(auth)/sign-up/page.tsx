import SignUpForm from '@/features/auth/components/signup-form'
import { requireUnAuth } from '@/lib/auth-utils'
import React from 'react'

const Page = async () => {
    await requireUnAuth()
    return (
        <>
            <SignUpForm />
        </>
    )
}

export default Page