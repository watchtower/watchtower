import { createUser } from '@/services/user';

export async function POST(request: Request) {
  const body = await request.json();
  if (!body.name || !body.email || !body.passwordHash) {
    return new Response(
      JSON.stringify({ message: 'Required parameters are missing' }),
      { status: 400 },
    );
  }
  try {
    const users = await createUser(body);
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: (error as Error).message }), {
      status: 409,
    });
  }
}