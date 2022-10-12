import fs from "fs";


const tulis = fs.createWriteStream("target.log");

tulis.write("Topan");
tulis.write("Nurpana");
tulis.write("Gendon");
tulis.end();

const baca = fs.createReadStream("target.log");

baca.addListener("data", (data)=>{
        console.info(data.toString());
})