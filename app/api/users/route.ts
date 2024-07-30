export async function GET(request: Request) {
  return new Response(
    JSON.stringify({
      routes: ['/api/users/create'],
    }),
    { status: 200 },
  );
}
