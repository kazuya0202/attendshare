import { PrismaClient } from "@prisma/client";

export default async function PrismaTest() {
  const prisma = new PrismaClient();
  const data = await prisma.notes.findMany();

  return <div>{JSON.stringify(data)}</div>;
}
