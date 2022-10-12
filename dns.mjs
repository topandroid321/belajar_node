import dns from "dns/promises"


const alamat = await dns.lookup("www.facebook.com");

console.info(alamat.address);
console.info(alamat.family);

