import { createPost } from "@/app/write/write-post.action";
import { getUser } from "@/src/query/user.query";
import React from "react";
import { WriteModal } from "./WriteModal";

export default async function page() {
  const user = await getUser("/write");
  return (
    <div>
      <WriteModal path="write" user={user} createPost={createPost} />
    </div>
  );
}
