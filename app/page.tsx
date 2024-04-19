"use client";

import {
  AppShell,
  Burger,
  Button,
  Group,
  NavLink,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconCalendarTime,
  IconHome,
  IconUser,
  IconUsersGroup,
} from "@tabler/icons-react";
import Link from "next/link";

const links = [
  { label: "Home", link: "/home", icon: <IconHome /> },
  { label: "My page", link: "/mypage", icon: <IconUser /> },
  { label: "Groups", link: "/groups", icon: <IconUsersGroup /> },
];

export default function Home() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      label={link.label}
      href={link.link}
      leftSection={link.icon}
      style={{ fontSize: "1.2rem" }}
    />
  ));

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 220,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="px-4"
      >
        <Link href={"/home"}>
          <Group wrap="nowrap">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              style={{ color: "white" }}
            />

            <ThemeIcon radius={"sm"} size={"lg"}>
              <IconCalendarTime />
            </ThemeIcon>
            <Text
              size="xl"
              style={{
                fontWeight: "bold",
              }}
            >
              AttendShare
            </Text>
          </Group>
        </Link>

        <Group justify="center" px="md">
          <Button size="sm">Log in</Button>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">{items}</AppShell.Navbar>

      <AppShell.Main w="100vw" bg={"#e2e8f0"}>
        Main
      </AppShell.Main>
    </AppShell>
  );
}
