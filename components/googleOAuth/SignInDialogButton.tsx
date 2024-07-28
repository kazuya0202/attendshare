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
import { singIn } from "@/utils/supabase"

const SignInDialogButton = () => {
  const handleSignInWithGoogle = async () => {
    await singIn("google")
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
