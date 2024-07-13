import { Button } from "@/components/ui/button";
import AddMonitor from "./_components/add-monitor";

import { getMonitors } from "@/services/monitor";

import MonitorCard from "./_components/monitor";

export default async function Monitors() {
  const monitors = await getMonitors();
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Monitors</h1>
        {monitors.length > 0 ? <AddMonitor /> : ""}
      </div>
      {monitors.length < 1 ? (
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You don&apos;t have any monitors
            </h3>
            <p className="text-sm text-muted-foreground">
              Start by adding a new monitor
            </p>
            <div className="mt-4">
              <AddMonitor />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {monitors.map((monitor) => (
            <MonitorCard key={monitor.id} monitor={monitor} />
          ))}
        </div>
      )}
    </main>
  );
}
