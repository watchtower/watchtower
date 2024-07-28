import { Card } from '@/components/ui/card';

import Link from 'next/link';

import type { Monitors } from '@prisma/client';

export default function MonitorCard({ monitor }: { monitor: Monitors }) {
  return (
    <Link href={`/services/view/${monitor.id}`}>
      <Card className="flex flex-col space-y-1.5 p-6 rounded-lg bg-secondary border-muted hover:border-primary/60 transition-all cursor-pointer">
          <span className="text-md font-medium text-primary">{monitor.name}</span>
      </Card>
    </Link>
  );
}
