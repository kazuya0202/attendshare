"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { supabase } from "@/utils/supabase"
import React from "react"
import { GoogleButton } from "./GoogleButton"
import { Button } from "./ui/button"

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

    console.log(data)
  }

  return (
    <Dialog>
      <Button asChild>
        <DialogTrigger>Sign In</DialogTrigger>
      </Button>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>
            <div className="flex justify-center p-4">
              <GoogleButton onClick={handleSignInWithGoogle} />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export { SignInDialogButton }
