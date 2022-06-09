import express, { Application, Request, Response } from 'express'

const app: Application = express()
const PORT: any = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// PostgreSQLの設定
const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'postgres_db',
  password: 'password',
  port: 5432,
})

// ルーティング
app.get('/', async (_req: Request, res: Response) => {
  const { rows } = await pool.query('select * from users')
  return res.status(200).send({rows})
})

try {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`dev server running at: http://localhost:${PORT}/`)
  })
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message)
  }
}

