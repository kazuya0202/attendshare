import { IconCalendarTime } from "@tabler/icons-react"
import Link from "next/link"

export function Header() {
  // const signOut = async () => {
  //   const { error } = await supabase.auth.signOut()
  //   if (error) {
  //     console.log(error)
  //   } else {
  //     console.log("already sign out")
  //   }
  // }

  return (
    <div>
      <header className="bg-white text-foreground shadow-sm">
        <div className="container flex items-center justify-between h-[60px] mx-auto">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <IconCalendarTime className="w-10 h-10 bg-primary rounded-sm text-white p-1.5" />
            <span className="ml-2 text-xl">AttendShare</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href={"/signin"}
              className="px-4 py-2 rounded-md text-primary-foreground bg-primary hover:bg-primary-darken"
            >
              Sign In
            </Link>
            <Link
              href={"/signup"}
              className="px-4 py-2 rounded-md text-primary-foreground bg-primary hover:bg-primary-darken"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
