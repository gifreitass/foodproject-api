import { Knex } from "./server/database/knex"
import { server } from "./server/server"

const startServer = () => {
    server.listen(process.env.PORT || 5432, () => console.log('app rodando'))
}

if (process.env.NODE_ENV === 'dev') {
    Knex.migrate.latest().then(() => {
        Knex.seed.run()
            .then(() => { startServer() })
            .catch(console.log)
    })
        .catch(console.log)
} else {
    startServer()
}