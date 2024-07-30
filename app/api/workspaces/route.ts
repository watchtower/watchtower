import { getWorkspaces } from '@/services/workspace';

export async function GET(request: Request) {
  const workspaces = await getWorkspaces();
  return new Response(JSON.stringify(workspaces), { status: 200 });
}
