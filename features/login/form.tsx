"use client";

import { Box, Button, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

export function LoginForm() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Box maw={450} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="email@example.com"
          {...form.getInputProps("email")}
        />
        <TextInput
          withAsterisk
          type="password"
          label="Password"
          {...form.getInputProps("password")}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Login</Button>
        </Group>
      </form>
    </Box>
  );
}
