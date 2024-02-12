"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContentTextArea } from "@/src/feature/post/ContentTextArea";
import { PostLayout } from "@/src/feature/post/PostLayout";
import { UserEdit } from "@/src/query/user.query";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";
import { z } from "zod";

const Schema = z.object({
  name: z.string().min(1).max(50),
  username: z.string().min(1).max(50),
  bio: z.string().max(500),
  link: z.string().max(50),
});

export type ProfileFormType = z.infer<typeof Schema>;

type ProfileFormProps = {
  user: UserEdit;
  onSubmit: (values: ProfileFormType) => Promise<String>;
};

export const ProfileForm = ({ user, onSubmit }: ProfileFormProps) => {
  const form = useZodForm({
    schema: Schema,
    defaultValues: {
      name: user.name ?? "",
      username: user.username,
      bio: user.bio ?? "",
      link: user.link ?? "",
    },
  });
  const router = useRouter();
  return (
    <PostLayout user={user} className="flex flex-col gap-2">
      <Form
        form={form}
        onSubmit={async (values) => {
          const url = await onSubmit(values);

          if (url) {
            router.push(`${url}`);
            router.refresh();
          }
          router.refresh;
        }}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Zuck" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="john" {...field} />
              </FormControl>{" "}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Input placeholder="Ich bin froh" {...field} />
              </FormControl>{" "}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>link</FormLabel>
              <FormControl>
                <Input placeholder="google.com" {...field} />
              </FormControl>{" "}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-end">
          <Button size="sm">Post</Button>
        </div>
      </Form>
    </PostLayout>
  );
};
