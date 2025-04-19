"use client";

import { Bell, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCurrentUserName } from "@/hooks/use-current-user-name";
import { createClient } from "@/lib/supabase/client";

import { CurrentUserAvatar } from "../current-user-avatar";
import { ModeToggle } from "../ui/mode-toggle";
import { Skeleton } from "../ui/skeleton";

export function DashboardHeader() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "/" },
    { name: "Settings", href: "/settings" },
    { name: "Logs", href: "/logs" },
    { name: "Templates", href: "/templates" },
    { name: "Integrations", href: "/integrations" },
    { name: "Reports", href: "/reports" },
  ];

  const { name, status: getCurrentUserStatus } = useCurrentUserName();

  const handleLogout = async () => {
    const supabase = createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error signing out:", error);
      return;
    }

    router.push("/auth/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-2 sm:px-4 md:px-6">
        <div className="flex items-center gap-4 md:gap-6 lg:gap-10">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image
              src="/logo.png"
              alt="TreSense AI"
              className="size-8"
              height={48}
              width={48}
            />
            <span className="font-semibold hidden md:inline-block">
              TreSense AI
            </span>
          </Link>
          <nav className="hidden md:flex gap-4 lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative h-8 w-8 sm:h-9 sm:w-9"
          >
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
          </Button>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 h-8 sm:h-9 px-1 sm:px-2 md:pr-4"
              >
                <CurrentUserAvatar />
                {getCurrentUserStatus === "pending" ? (
                  <Skeleton className="w-[120px] h-4 rounded" />
                ) : (
                  <span className="hidden md:inline-block text-sm font-medium">
                    {name}
                  </span>
                )}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-8 w-8 sm:h-9 sm:w-9"
              >
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex items-center gap-2 font-semibold py-4">
                <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  SA
                </div>
                <span>Sentiment AI</span>
              </div>
              <nav className="flex flex-col gap-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
