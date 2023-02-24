import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import helmet from 'helmet';
import xss from 'xss-clean'

import routes from "./routes/index.js"
import db from "./utils/db.js"
import errorHandler from "./middleware/errorHandler.js"

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(routes);
app.use(helmet());
app.use(xss());
app.use(errorHandler);

db.connect()
    .then(() => {
        console.log('Connected to DB')

        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`)
        })
    })
    .catch((err) => console.error('err'));