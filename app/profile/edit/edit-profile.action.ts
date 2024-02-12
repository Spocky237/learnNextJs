"use server";

import { getAuthSession } from "@/lib/auth";
import { ProfileFormType } from "./ProfileForm";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
export const editProfile = async (values: ProfileFormType) => {
  const session = await getAuthSession();

  if (!session) {
    const headersList = headers();
    const pathname = headersList.get("x-invoke-path") || "";
    redirect(`/api/auth/signin?callbackUrl=${pathname}`);
  }

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: values,
  });

  return "/profile";
};
