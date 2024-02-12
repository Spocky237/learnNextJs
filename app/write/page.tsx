import React from "react";
import { WritePostForm } from "./WritePostForm";
import { getUser } from "@/src/query/user.query";
import { createPost } from "./write-post.action";

export default async function write() {
  const user = await getUser("/write");
  return <WritePostForm user={user} onSubmit={createPost} />;
}
