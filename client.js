const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "10.0.0.224", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  // conn.setEncoding("utf8");

  conn.setEncoding("utf8");

  process.stdin.on("data", function(message) {
    conn.write(message);
  });

  conn.on("connect", function() {
    console.log("I AM successfully connected to game server.");
    conn.write('Name: SMC');
  });

 

  conn.on("data", function(message) {
    console.log("server sent:", message);
  });

  conn.on("end", function() {
    console.log("conn disconnected from server");
  });

  return conn;
};

module.exports = connect;