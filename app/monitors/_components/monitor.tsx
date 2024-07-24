import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

import type { Monitors } from "@prisma/client";

export default function MonitorCard({ monitor }: { monitor: Monitors }) {
  return (
    <Card className="flex flex-col space-y-3 p-6">
      <div className="flex-1 space-y-2">
        <p className="text-sm font-medium leading-none">{monitor.name}</p>
        <p className="text-sm text-muted-foreground">{monitor.url}</p>
      </div>
      <Button variant={"outline"} className="w-fit">
        <Link href={`/monitors/${monitor.id}`}>View Monitor</Link>
      </Button>
    </Card>
  );
}
