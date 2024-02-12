"use client";
import { Home, PenSquare, User } from "lucide-react";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { buttonVariants } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="w-full py-2 flex flex-row justify-between  gap-1 fixed bottom-0 left-0 right-0 bg-background  m-auto border-t border-accent ">
      <Link
        href="/"
        className={clsx(buttonVariants({ variant: "ghost" }), "flex-1")}
      >
        <Home size={16} />
      </Link>

      <Link
        href="/write"
        className={clsx(buttonVariants({ variant: "ghost" }), "flex-1")}
      >
        <PenSquare size={16} />
      </Link>

      <Link
        href="/profile"
        className={clsx(buttonVariants({ variant: "ghost" }), "flex-1")}
      >
        <User size={16} />
      </Link>
    </footer>
  );
};
