import { createWorkspace } from '@/services/workspace';

export async function POST(request: Request) {
  const body = await request.json();
  if (!body.name || !!body.ownerId) {
    return new Response(
      JSON.stringify({ message: 'Required parameters are missing' }),
      { status: 400 },
    );
  }
  const workspace = await createWorkspace(body);
}
