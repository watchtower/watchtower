'use server';

import { db } from '@/lib/db';
import { type Service } from '@prisma/client';

async function addService(input: Service): Promise<Service> {
  const {
    name,
    type,
    httpUrl,
    httpMethod,
    pingAddress,
    port,
    interval,
    checkSSL = false,
    checkDomain = false,
    timeout,
    workspaceId,
  } = input;

  if (!workspaceId) {
    throw new Error('workspaceId is required');
  }

  try {
    const service = await db.service.create({
      data: {
        name,
        type,
        httpUrl,
        httpMethod,
        pingAddress,
        port,
        interval,
        checkSSL,
        checkDomain,
        timeout,
        workspace: {
          connect: {
            id: workspaceId,
          },
        },
      },
    });
    return service;
  } catch (error) {
    console.error('Error adding service:', error);
    throw error;
  }
}

async function deleteService(serviceId: string): Promise<void> {
  if (!serviceId) {
    throw new Error('serviceId is required and must be a non-null string');
  }

  try {
    await db.service.delete({
      where: {
        id: serviceId,
      },
    });
  } catch (error) {
    console.error('Error deleting service:', error);
    throw error;
  }
}

async function getService(serviceId: string): Promise<Service | null> {
  if (!serviceId) {
    throw new Error('serviceId is required and must be a non-null string');
  }

  try {
    const service = await db.service.findUnique({
      where: {
        id: serviceId,
      },
    });
    return service;
  } catch (error) {
    console.error('Error getting service:', error);
    throw error;
  }
}

async function getServices(workspaceId: string): Promise<Service[]> {
  if (!workspaceId) {
    throw new Error('workspaceId is required and must be a non-null string');
  }

  try {
    const services = await db.service.findMany({
      where: {
        workspaceId,
      },
    });
    return services;
  } catch (error) {
    console.error('Error getting services:', error);
    throw error;
  }
}

export { addService, getService, getServices, deleteService };

// export async function getMonitors() {
//   const monitors = await db.monitors.findMany({
//     orderBy: {
//       updatedAt: 'desc',
//     },
//   });
//   return monitors;
// }

// export async function getMonitor(id: string) {
//   const monitor = await db.monitors.findUnique({
//     where: {
//       id,
//     },
//   });
//   return monitor;
// }

// export async function updateMonitor(id: string, name: string, url: string) {
//   const monitor = await db.monitors.update({
//     where: {
//       id,
//     },
//     data: {
//       name,
//       url,
//     },
//   });
//   return monitor;
// }

// export async function getPingsForMonitor(monitorId: string) {
//   const pings = await db.ping.findMany({
//     orderBy: {
//       start: 'desc'
//     },
//     take: 50
//   })
//   return pings;
// }
