export async function GET(request: Request) {
  return new Response(
    JSON.stringify({
      message: "Welcome to WatchTower's API",
      routes: ['/api/users', '/api/workspaces'],
    }),
    { status: 200 },
  );
}
