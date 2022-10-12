import process, { exit } from "process";

process.addListener("exit",(exitCode)=>{
    console.info(`NodeJs Exit with code ${exitCode}`);
})


console.info(process.version);
console.table(process.argv);



