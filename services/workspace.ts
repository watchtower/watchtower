'use server';

import { db } from '@/lib/db';
import { Workspace } from '@prisma/client';

type CreateWorkspace = {
  name: string;
  description?: string;
  ownerId: string;
};

async function createWorkspace(input: CreateWorkspace): Promise<Workspace> {
  const { name, description, ownerId } = input;

  try {
    const workspace = await db.workspace.create({
      data: {
        name,
        description,
        members: {
          create: {
            role: 'OWNER',
            user: {
              connect: {
                id: ownerId,
              },
            },
          },
        },
      },
      include: {
        members: true,
      },
    });

    return workspace;
  } catch (error) {
    throw error;
  }
}

async function getWorkspace(workspaceId: string): Promise<Workspace | null> {
  try {
    const workspace = await db.workspace.findUnique({
      where: {
        id: workspaceId,
      },
      include: {
        members: {
          include: {
            user: true,
          },
        },
        services: true,
        apiKeys: true,
      },
    });

    return workspace;
  } catch (error) {
    throw error;
  }
}

async function getWorkspaces(): Promise<Workspace[]> {
  try {
    const workspaces = await db.workspace.findMany({
      include: {
        members: {
          include: {
            user: true,
          },
        },
        services: true,
        apiKeys: true,
      },
    });
    return workspaces;
  } catch (error) {
    throw error;
  }
}

async function deleteWorkspace(workspaceId: string): Promise<void> {
  try {
    await db.workspace.delete({
      where: {
        id: workspaceId,
      },
    });
  } catch (error) {
    throw error;
  }
}

export { createWorkspace, getWorkspace, getWorkspaces, deleteWorkspace };
