"use server";

import { prisma } from "./prisma";

export async function createUser(formdata: FormData) {
  const name = formdata.get("name") as string;
  const email = formdata.get("email") as string;
  await prisma.user.create({ data: { name, email } });
}
