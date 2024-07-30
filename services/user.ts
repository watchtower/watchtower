'use server';

import { db } from '@/lib/db';
import { Prisma, type User } from '@prisma/client';

type PublicUser = Omit<User, 'passwordHash'>;

export async function getUser(id: string): Promise<PublicUser | null> {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
}

export async function createUser(input: any): Promise<PublicUser> {
  // TODO: Email Validation
  try {
    const user = await db.user.create({
      data: input,
    });
    const { passwordHash, ...publicUser } = user;
    return publicUser;
  } catch (error) {
      throw error;
  }
}

export async function getAllUsers(): Promise<User[]> {
  try {
    const users = await db.user.findMany();
    return users;
  } catch (error) {
    throw error;
  }
}
