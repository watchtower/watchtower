/**
 * Returns an array of SidebarMenu objects for the
 * global sidebar
 */

import {
  Activity,
  CircleAlert,
  PanelTop,
  LucideIcon,
  Server,
  Users,
  Settings,
  Blocks,
} from 'lucide-react';

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  badge: boolean;
};

export function SidebarLinks(pathname: string): Menu[] {
  return [
    {
      href: '/',
      label: 'Overview',
      active: pathname === '/',
      icon: Activity,
      badge: false,
    },
    {
      href: '/services',
      label: 'Services',
      active: pathname.includes('/services'),
      icon: Server,
      badge: false,
    },
    {
      href: '/incidents',
      label: 'Incidents',
      active: pathname.includes('/incidents'),
      icon: CircleAlert,
      badge: true,
    },
    {
      href: '/pages',
      label: 'Pages',
      active: pathname.includes('/pages'),
      icon: PanelTop,
      badge: false,
    },
    {
      href: '/access',
      label: 'Access',
      active: pathname.includes('/access'),
      icon: Users,
      badge: false,
    },
    {
      href: '/integrations',
      label: 'Integrations',
      active: pathname.includes('/integrations'),
      icon: Blocks,
      badge: false,
    },
  ];
}

export function SecondarySidebarLinks(pathname: string): Menu[] {
  return [
    {
      href: '/settings',
      label: 'Settings',
      active: pathname === '/settings',
      icon: Settings,
      badge: false,
    },
  ];
}
