'use server';

import { db } from '@/lib/db';
import { Workspace } from '@prisma/client';

type CreateWorkspaceInput = {
  name: string;
  description?: string;
  userId: string;
};

async function createWorkspace(
  input: CreateWorkspaceInput,
): Promise<Workspace> {
  const { name, description, userId } = input;

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
                id: userId,
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

export { createWorkspace, getWorkspace, deleteWorkspace };
