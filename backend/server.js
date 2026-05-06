import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import  './oAuths/passport.js'
import passport from 'passport'
import cors from 'cors'
import { doubleCsrf } from "csrf-csrf";
import morgan from 'morgan'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import RedisStore from "rate-limit-redis";
import flightRoutes from './routes/flightsRoute.js'
import hotelsRoutes from './routes/hotelsRoutes.js'
import carsRoutes from './routes/carsRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import dbconnect from './config/db.js'
import { errormidd } from './middlewares/errormiddleware.js'
import client, { connectRedis } from './config/redisConfig.js'
import compression from "compression";
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'
import oAuthRoutes from './routes/oAuthRoutes.js'
let app = express()
app.use(passport.initialize())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://www.globaltravel-holdings.com",
        "https://globaltravel-holdings.com"
    ],
    credentials: true,
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"]
}))
app.set("trust proxy",1);

app.use(morgan("dev"))
app.use(compression());
await connectRedis()
let limiter = rateLimit({
    // yeah limiter ka data memory mai nahi balki redis mai store karega aur sare server ka data sync karega
  store: new RedisStore({
    sendCommand: (...args) => client.sendCommand(args),
  }),
  windowMs: 15 * 60 * 1000,
  max: 1000,
  message: {
    status: 429,
    message: "Too many requests, try again later ",
  },
});  // span or ddos attack se bachata hai

app.use("/api",limiter);
dbconnect()



app.use("/api", flightRoutes)
app.use("/api", hotelsRoutes)
app.use("/api", carsRoutes)
app.use("/payment", bookingRoutes)
app.use("/user", userRoutes)
app.use("/auth", oAuthRoutes)
app.use(errormidd)

app.listen(process.env.PORT)

