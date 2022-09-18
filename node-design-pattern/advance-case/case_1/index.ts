import c from './db'

/**
 * @desc
 * 해당 지연으로 인해서 -> 프로그램 전체의 실행이 느려짐
 */
// {
// db.connect()
//   // 지연 -> Err
//   ;(async () => {
//     await db.query('A')
//     await db.query('B')
//     await db.query('C')
//     await db.query('D')
//     await db.query('E')
//   })()
// }

{
  c.queueDB.connect()

  c.queueDB.query('A')
  c.queueDB.query('B')
  c.queueDB.query('C')
  c.queueDB.query('D')

  setTimeout(async () => {
    for (const q of c.queueDB.commandQueue) {
      await q()
    }
  }, 2000)
}
