import { Header } from "@/features/header/Header"
import { UserProvider } from "@/provider/UserProvider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.scss"

const inter = Inter({ subsets: ["latin"] })

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "AttendShare",
  description: "AttendShare is a platform for sharing your attendance.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <UserProvider>
          <main className="grid grid-rows-[auto,1fr] min-h-screen">
            <Header />
            <div className="p-4">{children}</div>
          </main>
        </UserProvider>
      </body>
    </html>
  )
}
