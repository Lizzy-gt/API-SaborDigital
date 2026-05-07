const app = require('./app')
const pool = require('./config/database')

const PORT = 3000

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Erro ao achar banco', err)
        process.exit(1);
    }

    console.log('Rodando MySQL')
    connection.release()
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})