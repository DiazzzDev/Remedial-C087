import app from "./app.js"
import "./database.js"

const currentPort = 4000

async function main() {
    app.listen(currentPort)
    console.log("Server on port " + currentPort)
}

main()
