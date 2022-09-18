import level from 'level'
import sublevel from 'subleveldown'

const db = level('example-db')
const salesDb = sublevel(db, 'sales', { valueEncoding: 'json' })

/**
 * 전형적인 일괄처리
 */
export async function totalSalesToLow(product) {
  const now = Date.now()
  let sum = 0
  for await (const transaction of salesDb.createValueStream()) {
    if (!product || transaction.product === product) {
      sum += transaction.amount
    }
  }

  console.log(`totalSales() took: ${Date.now() - now}ms`)

  return sum
}
