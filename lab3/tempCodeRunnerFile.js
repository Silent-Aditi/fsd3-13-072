import { createReadStream } from "fs";
import http from "http";

const serve = https.createServe((req, res) => {
  if (req.url === "/index.html") {
    const stream = createReadStream("index.html", { encoding: "utf=-8" });
    stream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => console.log("prg3 is running"));
