"use server";

import { addMonitor } from "@/lib/monitor-services";
import { revalidatePath } from "next/cache";

export async function onAddMonitor(name: string, url: string) {
  try {
    const monitor = await addMonitor(name, url);
    if (monitor) {
      revalidatePath(`/monitors`);
    }
    return monitor;
  } catch (error) {
    throw new Error("Server Error");
  }
}
