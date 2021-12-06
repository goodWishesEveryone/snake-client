const net = require("net");
const connect = require("./client");

console.log("Connecting ...sm");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
// process.stdin.on('data', (key) => {
//   process.stdout.write('.');
// });
// console.log('after callback');

const handleUserInput = function (key) {
  //unicode CRTL + C
  if (key === "\u0003") {
    process.exit();
  }
};