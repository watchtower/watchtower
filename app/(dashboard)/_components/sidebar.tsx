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
      <div className="flex h-full max-h-screen flex-col">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span>WatchTower</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start text-sm font-medium">
            {menu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 pl-4 lg:pl-6 py-3.5 text-muted-foreground transition-all hover:text-primary hover:bg-muted",
                  pathname === item.href ? "bg-muted" : ""
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
                {item.badge && (
                  <Badge className="ml-auto flex w-6 h-6 shrink-0 items-center justify-center rounded-full">
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
