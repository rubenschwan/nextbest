import { Logo } from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-4 md:px-8 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center">
        <Link className="flex items-center justify-center gap-4" href="/">
          <Logo />
          <h1 className="font-bold text-xl">NextBest</h1>
        </Link>

        <nav className="ml-auto flex items-center gap-4">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#future"
          >
            Future Plans
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#get-started"
          >
            Get Started
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
