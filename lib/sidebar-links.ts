import {
  Activity,
  CircleAlert,
  LineChart,
  LucideIcon,
  ShieldCheck,
} from "lucide-react";

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
};

export function SidebarLinks(pathname: string): Menu[] {
  return [
    {
      href: "/",
      label: "Activity",
      active: pathname === "/",
      icon: Activity,
    },
    {
      href: "/monitors",
      label: "Monitors",
      active: pathname.includes("/monitors"),
      icon: ShieldCheck,
    },
    {
      href: "/incidents",
      label: "Incidents",
      active: pathname.includes("/incidents"),
      icon: CircleAlert,
    },
    {
      href: "/pages",
      label: "Pages",
      active: pathname.includes("/pages"),
      icon: LineChart,
    },
  ];
}
