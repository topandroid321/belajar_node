import os from "os";

console.info(os.cpus());
console.info(os.arch());
console.info(os.freemem());
console.info(os.totalmem());
console.info(os.homedir());
console.info(os.version());
console.info(os.uptime());

console.table(os.cpus());



