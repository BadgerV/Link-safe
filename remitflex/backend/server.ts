// importing inbuilt http module
import http from "http";

// importing default config
import { PORT } from "./config/config";

// import app
import { app } from "./app";

// creating server
const server = http.createServer(app);

//server listen
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
