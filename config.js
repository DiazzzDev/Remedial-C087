import dotenv from "dotenv"

//Ejecutamos la libreria dotenv
dotenv.config()

export const config = {
    db:{
        URI: process.env.DB_URI
    },
    JWT:{
        secret: process.env.JWT_Secret_key
    }
}