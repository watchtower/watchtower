import type { NextRequest } from 'next/server';
import { getMonitors } from '@/services/monitor';
import { ping } from '@/lib/monitor-ping';
import type { Config } from "@netlify/functions";


export const config: Config = { schedule: "*/30 * * * *" };
export const dynamic = 'force-dynamic';
 
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`)
    return new Response('Unauthorized', { status: 401 });

  const start = new Date();

  for (const monitor of await getMonitors())
    ping(monitor, start)

  return Response.json({ success: true });
}
