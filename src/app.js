import express from 'express';
import userRoutes from "./routes/user.routes.js"
import erroHandler from './middleware/errorHandler.js';

const app = express()

app.use(express.json())

app.use("/users", userRoutes)

app.use(erroHandler)
export default app
