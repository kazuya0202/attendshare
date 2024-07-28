"use client"

import { GoogleButton } from "@/components/googleOAuth/GoogleButton"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { supabase } from "@/utils/supabase"

const getURL = () => {
  const isLocalEnv = process.env.NODE_ENV === "development"
  const url = isLocalEnv
    ? "http://127.0.0.1:54321/auth/v1/callback"
    : process.env.NEXT_PUBLIC_SITE_URL
  console.log(url)
  return url
}

const SignInDialogButton = () => {
  const handleSignInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    })

    if (error) {
      console.error(error)
      return
    }
  }

  return (
    <Dialog>
      <Button asChild>
        <DialogTrigger>Sign In</DialogTrigger>
      </Button>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription className="flex justify-center p-4">
            <GoogleButton onClick={handleSignInWithGoogle} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export { SignInDialogButton }
