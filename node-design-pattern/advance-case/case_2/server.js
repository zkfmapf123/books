import { createServer } from 'http'
import { totalSalesToLow } from './totalSales.js'
import { totalSales as totalSalesBatch } from './totalSalesBatch.js'
import { totalSales as totalSalesCaching } from './totalCaching.js'
/**
 * export process.env.LEVEL="bad"
 * export process.env.LEVEL="mid"
 * export process.env.LEVEL="best"
 */

createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost')
  const product = url.searchParams.get('product')
  console.log(`Processing query : ${url.search} mode : ${process.env.LEVEL}`)

  let sum = 0
  switch (process.env.LEVEL) {
    case 'bad':
      sum = totalSalesToLow(product)
    case 'mid':
      sum = totalSalesBatch(product)
    case 'best':
      sum = totalSalesCaching(product)
  }

  res.setHeader('Content-Type', 'application/json')
  res.writeHead(200)
  res.end(
    JSON.stringify({
      product,
      sum,
    })
  )
}).listen(8080, () => console.log('Server Started'))
