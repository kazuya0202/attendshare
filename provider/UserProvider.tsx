"use client"

import { useUserStore } from "@/hooks/useUserStore"
import { supabase } from "@/utils/supabase"
import type React from "react"
import { useEffect } from "react"

type Props = {
  children: React.ReactNode
}

const UserProvider = ({ children }: Props) => {
  const { updateUser } = useUserStore()

  useEffect(() => {
    const getLoggedInUser = async () => {
      const { data } = await supabase.auth.getUser()
      updateUser(data.user)
    }
    getLoggedInUser()
  }, [updateUser])

  return <>{children}</>
}

export { UserProvider }
