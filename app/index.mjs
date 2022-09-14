import Fastify from 'fastify'
import Enhance from '@enhance/fastify-plugin'

const app = Fastify()

app.register(Enhance)

app.listen({ host: "0.0.0.0", port: 3333 }).then(() => {
    console.log('Server listening on port 3333')
});