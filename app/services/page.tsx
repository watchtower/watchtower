import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// import { getMonitors } from '@/services/monitor';

import ServiceCard from './_components/service';

import Link from 'next/link';
import { Search } from 'lucide-react';

export default async function Services() {
  // const services = await getMonitors();
  const services: any = [];
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center justify-between">
        <div className="select-none">
          <h1 className="text-lg font-medium md:text-xl">Services</h1>
          <p className="text-muted-foreground text-sm">
            Here you can manage your services
          </p>
        </div>
        {services.length > 0 && (
          <Link href="/services/new">
            <Button>New Service</Button>
          </Link>
        )}
      </div>
      {services.length < 1 ? (
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-medium tracking-tight">
              You don&apos;t have any monitors
            </h3>
            <p className="text-sm text-muted-foreground">
              Start by adding a new service
            </p>
            <div className="mt-4">
              <Link href="/services/new">
                <Button>New Service</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex">
            <div className="relative basis-1/2 mr-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="text-muted-foreground/50 w-5 h-5" />
              </div>
              <Input
                className="pl-10 pr-4 py-2"
                type="text"
                placeholder="Search your services"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="date">Date Added</SelectItem>
                  <SelectItem value="alphabetical">Alphabetical</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {/* {services.map((monitor) => (
              <ServiceCard key={monitor.id} monitor={monitor} />
            ))} */}
          </div>
        </div>
      )}
    </main>
  );
}
