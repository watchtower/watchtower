'use server';

import { db } from '@/lib/db';

export async function addMonitor(name: string, url: string) {
  const monitor = await db.monitors.create({
    data: {
      name,
      url,
    },
  });
  return monitor;
}

export async function deleteMonitor(id: string) {
  const monitor = await db.monitors.delete({
    where: {
      id,
    },
  });
  return monitor;
}

export async function getMonitors() {
  const monitors = await db.monitors.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
  });
  return monitors;
}

export async function getMonitor(id: string) {
  const monitor = await db.monitors.findUnique({
    where: {
      id,
    },
  });
  return monitor;
}

export async function updateMonitor(id: string, name: string, url: string) {
  const monitor = await db.monitors.update({
    where: {
      id,
    },
    data: {
      name,
      url,
    },
  });
  return monitor;
}
