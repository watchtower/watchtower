import { Monitors } from '@prisma/client';
import { db } from './db';

export function ping(monitor: Monitors, start: Date) {
  fetch(monitor.url)
  .then(({ status }) => {
    const end = new Date();
    db.ping.create({
      data: {
        monitorId: monitor.id,
        start, end, status
      }
    });
  })
  .catch(error => {
    // Not sure what to send to the database
    // Log error
    // Retry ?
  });
}
