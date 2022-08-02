import fs from "fs";

/*-------------readfile----------------*/
// const readFileFunction = (error,data) =>{
//   if (error) {
//     console.log("gagal membaca file")
//   }
//   console.log(data)
// }
// fs.readFile('text.txt','UTF-8',readFileFunction)

/*--------------------stream file readable--------------------*/

// const streamFile = fs.createReadStream("./text.txt", {
//   highWaterMark: 1,
// });

// streamFile.on("readable", () => {
//   try {
//     process.stdout.write(`[${streamFile.read()}]`);
//   } catch (err) {
//     //
//   }
// });
// streamFile.on("end", () => {
//   console.log("done");
// });

/*----------------Writable Stream----------------*/

// const writeStreamFile = fs.createWriteStream("output.txt");

// writeStreamFile.write(
//   "lorem loremlorem loremlorem loremlorem loremlorem lorem"
// );
// writeStreamFile.write("ipsumipsumipsumipsumipsumipsumipsum ipsumipsum ipsum");
// writeStreamFile.end();

/*latihan*/
/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const readableStream = fs.createReadStream("text.txt", {
  highWaterMark: 15,
});

const writableStream = fs.createWriteStream("output.txt");

readableStream.on("readable", () => {
  try {
    writableStream.write(`${readableStream.read()}\n`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
  }
});

readableStream.on("end", () => {
  writableStream.end();
});
