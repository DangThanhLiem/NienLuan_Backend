import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routers/foodRouter.js"
import userRouter from "./routers/userRouter.js"
import 'dotenv/config'
import cartRouter from "./routers/cartRouter.js"
//app config
const app = express()
const port = 4000
//middleware
app.use(express.json())
app.use(cors())
//db connection
connectDB();
//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)


app.get("/", (req, res) => {
    res.send("SERVER ON")
})

app.listen(port, () => {
    console.log(`Server Start on http://localhost:${port} `);
})