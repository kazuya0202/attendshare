"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { supabase } from "@/utils/supabase"
import { zodResolver } from "@hookform/resolvers/zod"
import type { Session, User } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { type SubmitHandler, useForm } from "react-hook-form"
import z from "zod"

const schema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
})

type InputType = z.infer<typeof schema>

export function SignInForm() {
  const router = useRouter()
  const [pending, setPending] = useState(false)

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const [user, setUser] = useState<User | null>()
  const [session, setSession] = useState<Session | null>()

  const signIn = async (email: string, password: string) => {
    setPending(true)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
      if (error) throw error

      setUser(data.user)
      setSession(data.session)
      console.log(data)

      setPending(false)

      if (data.user) {
        router.push("/")
      }
    } catch (error) {
      console.log(error)
      setPending(false)
    }
  }

  const onSubmit: SubmitHandler<InputType> = (values) => {
    signIn(values.email, values.password)
    console.log(values)
  }

  return (
    <div className="flex justify-center">
      <div className="w-[400px] space-y-6 p-4">
        <h1 className="text-2xl font-bold mt-8">Sign In</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">
                    Email
                    <span className="text-red-500 ml-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">
                    Password
                    <span className="text-red-500 ml-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between">
              <a href="/signup" className="text-blue-600">
                Create new account
              </a>
              <Button className="bg-primary hover:bg-primary-darken text-white">
                Sign In
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
