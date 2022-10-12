import readline from "readline";
import process from "process";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question("Angka Pertama?",(angka1)=>{
    
    console.info(`Halo salam kenal ${angka1}`);
})