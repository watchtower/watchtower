// import { getPingsForMonitor } from "@/services/monitor";

// export default async function Monitor(props: any) {
//   const id: string = props.params.id
//   const pings = await getPingsForMonitor(id)

//   return (
//     <main>
//       {pings.map((ping, index) =>
//         ping.status >= 400 && ping.status < 500
//         ? <div key={index}>green</div>
//         : <div key={index}>red</div>
//       )}
//     </main>
//   );
// }

export default function Monitor() {
  return (
    <main>
      <div>hello</div>
    </main>
  );
}
