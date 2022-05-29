import http from "http";
import cluster from "cluster";
import os from "os";

const pid = process.pid;

if (cluster.isMaster) {
  const cpus = os.cpus().length;
  console.log(`Clustering to ${cpus} CPUs`);

  for (let i = 0; i < cpus; i++) {
    console.log("fork");
    cluster.fork();
  }
} else {
  http
    .createServer((req, res) => {
      // 한 pid에 많은 부하가 발생한다
      for (let i = 1e7; i > 0; i++) {
        console.log(`Handling request from ${pid}`);
        res.end(`Hello world ${pid}\n`);
      }
    })
    .listen(3000, () => {
      console.log(`start ${pid}\n`);
    });
}
