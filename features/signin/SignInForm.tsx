"use client";

import { supabase } from "@/utils/supabase";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Group, TextInput, Title } from "@mantine/core";
import type { Session, User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";

const schema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

type InputType = z.infer<typeof schema>;

export function SignInForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [user, setUser] = useState<User | null>();
  const [session, setSession] = useState<Session | null>();

  const signIn = async (email: string, password: string) => {
    setPending(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) throw error;

      setUser(data.user);
      setSession(data.session);
      console.log(data);

      setPending(false);

      if (data.user) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      setPending(false);
    }
  };

  const onSubmit: SubmitHandler<InputType> = (values) => {
    signIn(values.email, values.password);
    console.log(values);
  };

  return (
    <Box maw={350} mx="auto" mt="xl" w={"100%"}>
      <Title order={2} mb={"lg"}>
        Sign In
      </Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => (
            <TextInput
              size="md"
              withAsterisk
              label="Email"
              placeholder="email@example.com"
              error={!!error}
              {...field}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => (
            <span style={{ color: "red" }}>{message}</span>
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => (
            <TextInput
              mt="md"
              size="md"
              withAsterisk
              type="password"
              label="Password"
              error={!!error}
              {...field}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => (
            <span style={{ color: "red" }}>{message}</span>
          )}
        />

        <Group justify="space-between" mt="lg">
          <Button
            size="md"
            variant="subtle"
            style={{ padding: "0 0.5rem" }}
            onClick={() => router.push("/signup")}
          >
            Create new account
          </Button>
          <Button type="submit" size="md">
            Sign In
          </Button>
        </Group>
      </form>
    </Box>
  );
}
