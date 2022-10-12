import readline from "readline";
import process from "process";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.table(process.argv);

input.on('SIGINT', () => {
    input.question('Are you sure you want to exit? ', (answer) => {
      if (answer.match(/^y(es)?$/i)) input.pause();
    });
  });