

import { requireAuth } from '@/lib/auth-utils'
import React from 'react'
import { caller } from '@/trpc/server'
import LogoutButton from '@/features/auth/components/logout-button'

const Page = async () => {
  await requireAuth();
  const data = await caller.getUsers();

  return (
    <div>
      {JSON.stringify(data)}
      <LogoutButton />
    </div>
  )
}

export default Page