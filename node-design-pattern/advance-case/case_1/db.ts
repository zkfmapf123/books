/**
 * @desc Connect가 지연되고 -> 실행
 */

interface Idb {
  connect(): void
  query(q: string): Promise<void>
}

class DB implements Idb {
  private connected: boolean = false

  connect() {
    setTimeout(() => {
      this.connected = true
    }, 100)
  }

  async query(queryString: string) {
    if (!this.connected) {
      throw new Error('Not Connected yet')
    }

    console.log(`Query Executed ${queryString}`)
  }

  get connectStatus() {
    return this.connected
  }
}

class QueueDB implements Idb {
  conn: boolean = false
  commandQueue: any[] = []

  connect() {
    setTimeout(() => {
      this.conn = true
    }, 1000)
  }

  async query(q: string) {
    if (!this.conn) {
      console.log(`Request Queue : ${q}`)

      // Queue에 쌓게함
      const task = async () => {
        this.query(q)
      }
      this.commandQueue.push(task)
    } else {
      console.log(`Success : ${q}`)
    }
  }
}

export default {
  db: new DB(),
  queueDB: new QueueDB(),
}
