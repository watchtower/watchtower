import {
  Bell,
  Calendar,
  Wallet,
  CircleAlert,
  Check,
  Trash,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function Notification() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[350px] p-4">
        <div className="flex items-center justify-between">
          <DropdownMenuLabel className="text-lg font-medium">
            Notifications
          </DropdownMenuLabel>
          <DropdownMenuItem className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 cursor-pointer">
            Mark all as read <Check className="ml-2 h-4 w-4" />
          </DropdownMenuItem>
        </div>
        <DropdownMenuSeparator className="my-2" />
        <div className="space-y-6 p-2">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <Trash className="h-4 w-4" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">Monitor Removed</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                User 2 removed monitor {'"Monitor 1"'}.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10 text-red-500">
              <CircleAlert className="h-4 w-4" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">API Server Down</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Not responding for 24 hours.
              </p>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
