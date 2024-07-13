"use client";

import Link from "next/link";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { SidebarLinks } from "@/lib/sidebar-links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import ThemeButton from "./theme-button";
import Notification from "./notification";
import StatusBanner from "./status-banner";

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
                {item.badge && (
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    1
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <StatusBanner />
      </div>
      <div className="flex items-center gap-4">
        <ThemeButton />
        <Notification />
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/swargaraj.png" alt="@shadcn" />
          <AvatarFallback>SB</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
