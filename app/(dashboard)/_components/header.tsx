"use client";

import Link from "next/link";

import { Menu, Bell } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { SidebarLinks } from "@/lib/sidebar-links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { ThemeButton } from "./theme-button";

export default function Header() {
  const pathname = usePathname();
  const menu = SidebarLinks(pathname);

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <span>WatchTower</span>
            </Link>

            {menu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary hover:bg-muted",
                  pathname === item.href
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">{/* Header Content */}</div>
      <ThemeButton />

      <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
        <Bell className="h-4 w-4" />
      </Button>
    </header>
  );
}
