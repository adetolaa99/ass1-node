const http = require("http");

const PORT = 8900;
const HOSTNAME = "localhost";

const server = http.createServer(requestHandler);
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is started at http://${HOSTNAME}:${PORT}`);
});

function requestHandler(req, res) {
  res.writeHead(200);
  res.end("Hassan Nofisat Adetola");
}
