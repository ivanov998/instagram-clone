import express from "express"
import dotenv from "dotenv"

import routes from "./routes/index.js"
import db from "./utils/db.js"
import errorHandler from "./middlware/errorHandler.js"

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler)

db.connect()
    .then(() => {
        console.log('Connected to DB')

        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`)
        })
    })
    .catch((err) => console.error('err'))