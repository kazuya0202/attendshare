"use client"

import { SignInDialogButton } from "@/components/googleOAuth/SignInDialogButton"
import { Button } from "@/components/ui/button"
import { useUserStore } from "@/hooks/useUserStore"
import { signOut } from "@/utils/supabase"
import { IconCalendarTime } from "@tabler/icons-react"
import Link from "next/link"

export function Header() {
  const { user, updateUser } = useUserStore()

  return (
    <div>
      <header className="bg-white text-foreground drop-shadow">
        <div className="container flex items-center justify-between h-[60px] mx-auto">
          <Link href="/" className="flex items-center gap-2 font-bold">
            {/* <Sidebar /> */}
            <IconCalendarTime className="w-10 h-10 bg-primary rounded-sm text-white p-1.5" />
            <span className="ml-2 text-xl">AttendShare</span>
          </Link>
          <div className="flex items-center gap-4">
            {user ? (
              <Button onClick={signOut} className="">
                Sign Out
              </Button>
            ) : (
              <SignInDialogButton />
            )}
          </div>
        </div>
      </header>
    </div>
  )
}
