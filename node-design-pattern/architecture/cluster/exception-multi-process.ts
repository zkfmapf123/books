import http from "http";
import cluster from "cluster";
import os from "os";

const pid = process.pid;

if (cluster.isMaster) {
  const cpuLen = os.cpus().length;

  console.log(`Clustering to ${cpuLen} CPUs`);

  for (let i = 0; i < cpuLen; i++) {
    console.log("fork");
    cluster.fork();
  }

  cluster.on("exit", (worker, code) => {
    if (code != 0 && !worker.isDead()) {
      console.log(`Worker crashed. Starting a new worker`);
      cluster.fork();
    }
  });
} else {
  http
    .createServer((req, res) => {
      for (let i = 1e7; i > 0; i++) {
        console.log(`Handling request from ${pid}`);
        res.end(`Hello world ${pid}\n`);
      }
    })
    .listen(3001, () => {
      console.log(`start ${pid}\n`);
    });
}
