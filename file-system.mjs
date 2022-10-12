import fs from "fs/promises"

const buffer = await fs.readFile("os.mjs");

console.info(buffer.toString());


await fs.mkdir("folder-baru2");
await fs.opendir("folder-baru2");
await fs.writeFile("folder-baru2/latihan.mjs","haloo gesss");
