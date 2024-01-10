import { PostHome } from "@/src/query/post.query";
import React from "react";
import { PostLayout } from "./PostLayout";

type PostProps = {
  post: PostHome;
};

export const Post = ({ post }: PostProps) => {
  return <PostLayout user={post.user}></PostLayout>;
};
