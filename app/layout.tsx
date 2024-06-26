import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.scss"
import { Header } from "@/features/header/Header"

const inter = Inter({ subsets: ["latin"] })

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <main className="grid grid-rows-[auto,1fr] min-h-screen">
          <Header />
          <div className="p-4">{children}</div>
        </main>
      </body>
    </html>
  )
}
