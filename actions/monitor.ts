// "use server";

// import { addMonitor, deleteMonitor } from "@/services/monitor";
// import { revalidatePath } from "next/cache";

// export async function onAddMonitor(name: string, url: string) {
//   try {
//     const monitor = await addMonitor(name, url);
//     if (monitor) {
//       revalidatePath(`/monitors`);
//     }
//     return monitor;
//   } catch (error) {
//     throw new Error("Server Error");
//   }
// }

// export async function onDeleteMonitor(id: string) {
//   try {
//     const monitor = await deleteMonitor(id);
//     if (monitor) {
//       revalidatePath(`/monitors`);
//     }
//     return monitor;
//   } catch (error) {
//     throw new Error("Server Error");
//   }
// }
