"use client"

import { IconHome, IconUser, IconUsersGroup } from "@tabler/icons-react"
import Link from "next/link"
import { useState } from "react"

const links = [
  { label: "Home", link: "/home", icon: <IconHome /> },
  { label: "My page", link: "/mypage", icon: <IconUser /> },
  { label: "Groups", link: "/groups", icon: <IconUsersGroup /> },
]

export default function Home() {
  const [opened, setOpened] = useState(false)

  return (
    <>
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

  // return (
  //   <AppShell
  //     header={{ height: 60 }}
  //     navbar={{
  //       width: 220,
  //       breakpoint: "sm",
  //       collapsed: { mobile: !opened },
  //     }}
  //     padding="md"
  //   >
  //     <AppShell.Header
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "space-between",
  //       }}
  //       className="px-4"
  //     >
  //       <Link href={"/home"}>
  //         <Group wrap="nowrap">
  //           <Burger
  //             opened={opened}
  //             onClick={toggle}
  //             hiddenFrom="sm"
  //             size="sm"
  //             style={{ color: "white" }}
  //           />

  //           <ThemeIcon radius={"sm"} size={"lg"}>
  //             <IconCalendarTime />
  //           </ThemeIcon>
  //           <Text
  //             size="xl"
  //             style={{
  //               fontWeight: "bold",
  //             }}
  //           >
  //             AttendShare
  //           </Text>
  //         </Group>
  //       </Link>

  //       <Group justify="center" px="md">
  //         {/* {user ? (
  //           <Button size="sm" onClick={() => supabase.auth.signOut()}>
  //             Sign Out
  //           </Button>
  //         ) : (
  //           <Button size="sm" onClick={() => router.push("/signin")}>
  //             Sign In
  //           </Button>
  //         )} */}
  //         <Button size="sm" onClick={() => router.push("/signin")}>
  //           Sign In
  //         </Button>
  //         <Button size="sm" onClick={signOut}>
  //           Sign Out
  //         </Button>
  //       </Group>
  //     </AppShell.Header>

  //     <AppShell.Navbar p="md">{items}</AppShell.Navbar>

  //     <AppShell.Main w="100vw" bg={"#e2e8f0"}>
  //       Main
  //     </AppShell.Main>
  //   </AppShell>
  // );
}
