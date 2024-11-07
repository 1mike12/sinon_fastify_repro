const fastify = require('fastify');
const app = fastify();

app.post('/test', async (request, reply) => {
    return reply.send(request.body);
});

module.exports = app
