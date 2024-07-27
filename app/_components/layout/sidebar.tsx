'use client';

import Link from 'next/link';

import { SidebarLinks, SecondarySidebarLinks } from '@/lib/sidebar-links';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const pathname = usePathname();
  const menu = SidebarLinks(pathname);
  const secondaryMenu = SecondarySidebarLinks(pathname);

  return (
    <div className="hidden border-r border-muted bg-secondary md:block select-none">
      <div className="flex h-full max-h-screen flex-col">
        <div className="flex h-14 items-center border-b border-muted px-4 lg:h-[60px] lg:px-6 justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span>WatchTower</span>
          </Link>
        </div>
        <div className="flex-1">
          <div className="flex flex-col justify-between h-full px-4 py-4">
            <nav className="grid items-start text-sm font-medium space-y-1">
              {menu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-2 rounded-lg text-muted-foreground hover:text-primary border border-transparent transition-colors',
                    pathname === item.href
                      ? 'dark:bg-gradient-to-b dark:from-[#252525] dark:to-[#1D1D1D] border border-primary/10 dark:shadow-lg text-primary'
                      : '',
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
            <nav className="grid items-start text-sm font-medium space-y-1">
              {secondaryMenu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-2 rounded-lg text-muted-foreground hover:text-primary border border-transparent transition-colors',
                    pathname === item.href
                      ? 'dark:bg-gradient-to-b dark:from-[#252525] dark:to-[#1D1D1D] border border-primary/10 dark:shadow-lg text-primary'
                      : '',
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
