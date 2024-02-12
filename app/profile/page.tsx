import { getAuthSession } from "@/lib/auth";
import { getUserProfile } from "@/src/query/user.query";
import * as React from "react";
import { Profile } from "../users/[userId]/Profile";
import { Post } from "@/src/feature/post/Post";
import { notFound, redirect, usePathname } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default async function ProfilePage() {
  const session = await getAuthSession();

  if (!session?.user.id) {
    const path = "/profile";
    redirect(`/api/auth/signin`);
  }

  const user = await getUserProfile(session?.user.id);

  if (!user) {
    notFound();
  }
  return (
    <div>
      <Profile user={user}>
        <form className="mt-4">
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/profile/edit"
          >
            Edit profile
          </Link>
        </form>
      </Profile>
      <div className="divide-y divide-accent border-t border-accent mt-4">
        {user.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
