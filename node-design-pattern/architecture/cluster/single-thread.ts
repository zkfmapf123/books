import http from "http";
import process from "process";

const pid = process.pid;

export const serverStart = (port: number) => {
  // 서버 부하 test
  http
    .createServer((req, res) => {
      // 한 pid에 많은 부하가 발생한다
      for (let i = 1e7; i > 0; i++) {
        console.log(`Handling request from ${pid}`);
        res.end(`Hello world ${pid}\n`);
      }
    })
    .listen(port, () => {
      console.log(`start ${pid}\n`);
    });
};

serverStart(8080);

/**
 * npm start
 * curl http://localhost:8080
 *
 * - 200개의 연결을 10초동안 load
 * siege -c200 -t10S http://localhost:8080
 */
