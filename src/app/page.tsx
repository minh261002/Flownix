

"use client";
import { requireAuth } from '@/lib/auth-utils'
import React from 'react'
import { caller } from '@/trpc/server'
import LogoutButton from '@/features/auth/components/logout-button'
import { Button } from '@/components/ui/button'
import { useTRPC } from '@/trpc/client'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

const Page = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      toast.success("Job queued");
    }
  }))

  return (
    <div>
      {JSON.stringify(data)}
      {/* <LogoutButton /> */}
      <Button onClick={() => create.mutate()}>Create Workflow</Button>
    </div>
  )
}

export default Page