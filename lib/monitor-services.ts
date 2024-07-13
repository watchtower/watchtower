import { db } from "@/lib/db";

export async function addMonitor(name: string, url: string) {
  const monitor = await db.monitors.create({
    data: {
      name,
      url,
    },
  });
  return monitor;
}
