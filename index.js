const fastify = require("fastify")
const fs = require("fs/promises")

const app = fastify()

app.get("/", async (req, res) => {
    const file = await fs.readFile("./index.html", { encoding: "utf-8" })
    res.type("text/html").send(file)
})

app.listen({
    host: "0.0.0.0",
    port: 4500
})