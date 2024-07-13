"use client";

import Link from "next/link";

import { SidebarLinks } from "@/lib/sidebar-links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

export default function Sidebar() {
  const pathname = usePathname();
  const menu = SidebarLinks(pathname);

  return (
    <div className="hidden border-r bg-muted/40 md:block select-none">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span>WatchTower</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 space-y-1 text-sm font-medium lg:px-4">
            {menu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted",
                  pathname === item.href ? "bg-muted" : ""
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
        </div>
      </div>
    </div>
  );
}
