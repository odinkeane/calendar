import "dotenv/config"
import express from "express"
import router from "./src/router.js"
import cors from "cors"

const app = express()

const PORT = process.env.PORT ?? "8080"
const HOST = process.env.HOST ?? "http://127.0.0.1"
app.use(router)

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true 
}));


app.listen(PORT, () => {
    console.log(`Сервер слушается по адрессу ${HOST}:${PORT}`)
})
