"use client"

import { GoogleButton } from "@/components/GoogleButton"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { supabase } from "@/utils/supabase"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

const SigninForm = () => {
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
    <div className="flex flex-col p-8 space-y-4">
      {/* <Card className="w-[400px] space-y-4 mt-8 rounded-xl p-6 pb-8"> */}
      <GoogleButton onClick={handleSignInWithGoogle} />
      <Link href="/" passHref>
        <Button variant="link" className="text-gray-600">
          <ArrowLeftIcon width={18} height={18} />
          <p className="ml-1">Go back to the top page</p>
        </Button>
      </Link>
      {/* </Card> */}
    </div>
  )
}

export { SigninForm }
