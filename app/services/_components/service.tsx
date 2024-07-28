import { Card } from '@/components/ui/card';

import Link from 'next/link';

import type { Service } from '@prisma/client';

export default function MonitorCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/view/${service.id}`}>
      <Card className="flex flex-col space-y-1.5 p-6 rounded-lg bg-secondary border-muted hover:border-primary/60 transition-all cursor-pointer">
        <span className="text-md font-medium text-primary">{service.name}</span>
      </Card>
    </Link>
  );
}
