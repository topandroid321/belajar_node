import {
    setTimeout,
    setImmediate,
    setInterval,
  } from 'timers/promises';

// const res = await setTimeout(5000, 'result');
// console.info(res);

const interval = 5000;
for await (const startTime of setInterval(interval, Date.now())) {
  const now = Date.now();
  console.info(now);
  if ((now - startTime) > 1000)
    break;
}
console.info(Date.now());