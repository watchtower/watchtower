import {
  Activity,
  CircleAlert,
  LineChart,
  LucideIcon,
  ShieldCheck,
  Users,
} from "lucide-react";

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
      href: "/",
      label: "Activity",
      active: pathname === "/",
      icon: Activity,
      badge: false,
    },
    {
      href: "/monitors",
      label: "Monitors",
      active: pathname.includes("/monitors"),
      icon: ShieldCheck,
      badge: false,
    },
    {
      href: "/incidents",
      label: "Incidents",
      active: pathname.includes("/incidents"),
      icon: CircleAlert,
      badge: true,
    },
    {
      href: "/pages",
      label: "Pages",
      active: pathname.includes("/pages"),
      icon: LineChart,
      badge: false,
    },
    {
      href: "/users",
      label: "Users",
      active: pathname.includes("/team"),
      icon: Users,
      badge: false,
    },
  ];
}
