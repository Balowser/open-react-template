"use client";

import Link from "next/link";
import Logo from "./logo";
import { Button } from "./button";

export default function ModernHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/signin">Anmelden</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/signup">Kostenlos testen</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

