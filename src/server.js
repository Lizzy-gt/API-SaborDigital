require('dotenv').config()
const app = require('./app')
const pool = require('./config/database')

const PORT = 3000

pool.query('SELECT 1')
  .then(() => {
    console.log('Rodando MySQL')
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    })
  })
  .catch((err) => {
    console.error('Erro ao achar banco', err)
    process.exit(1)
  })