"use client"

import { useUserStore } from "@/hooks/useUserStore"
import { IconHome, IconUser, IconUsersGroup } from "@tabler/icons-react"
import Link from "next/link"
import { useState } from "react"

const links = [
  { label: "Home", link: "/home", icon: <IconHome /> },
  { label: "My page", link: "/mypage", icon: <IconUser /> },
  { label: "Groups", link: "/groups", icon: <IconUsersGroup /> },
]

export default function Home() {
  const { user } = useUserStore()

  return (
    <>
      <p>{user ? user.email : "no user"}</p>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.link}
              className="flex items-center gap-2 p-4 rounded-md bg-slate-200"
            >
              {link.icon}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
