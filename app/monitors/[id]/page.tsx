import { getPingsForMonitor } from "@/services/monitor";

export default async function Monitor(props: any) {
  const id: string = props.params.id
  const pings = await getPingsForMonitor(id)

  return (
    <main>
      {pings.map(ping =>
        ping.status >= 400 && ping.status < 500
        ? <div key={ping.start.getTime()}>green</div>
        : <div key={ping.start.getTime()}>red</div>
      )}
    </main>
  );
}
