import express from 'express'
import http from 'http'
import {Server} from 'socket.io'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'

// Router
import AuthRoute from './routes/Auth'
import KamarRoute from './routes/Kamar'
import PasienRoute from './routes/Pasien'
import RumahSakitRoute from './routes/RumahSakit'

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

// Router
app.use('/auth', AuthRoute) // route - authentikasi
app.use('/kamar', KamarRoute) // route - kamar, pesan kamar
app.use('/pasien', PasienRoute) // route - pasien
app.use('/rs', RumahSakitRoute) // route - rumah sakit, add akun user

const port = 8080
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
})

server.listen(port)