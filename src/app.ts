import express, {Request, Response, NextFunction} from "express";
import admin from "firebase-admin";
import "express-async-errors";
import "dotenv/config";
import cors from "cors"

import {AppError} from "./errors/appError"
import { productsRoutes } from "./routes/productsRoutes";
import { movimentsRoutes } from "./routes/movimentsRoutes";

const app = express();

admin.initializeApp({
  credential: admin.credential.cert("serviceAccountKey.json")
});

app.use(express.json());

app.use(cors());

app.use(productsRoutes);
app.use(movimentsRoutes);




const port = 3000
app.listen(process.env.PORT ? Number(process.env.PORT) : port, () => console.log("Servidor rodando na porta:", port ))