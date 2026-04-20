import cookieParser from "cookie-parser";
import express from "express";
import clientRoutes from "./src/routes/client.js"

const app = express()

app.use(cookieParser())

app.use(express.json())

//Endpoints
app.use("/api/clients", clientRoutes)

export default app