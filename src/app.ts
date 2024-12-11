import express, {Request, Response, NextFunction} from "express";
import admin from "firebase-admin";
import "express-async-errors";
import "dotenv/config";

import {AppError} from "./errors/appError"
import { userRoutes } from "./routes/userRoutes";
import { productsRoutes } from "./routes/productsRoutes";
import { movimentsRoutes } from "./routes/movimentsRoutes";

const app = express();

admin.initializeApp({
  credential: admin.credential.cert("serviceAccountKey.json")
});

app.use(express.json());

app.use(userRoutes);
app.use(productsRoutes);
app.use(movimentsRoutes);


app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    return response.status(err.status).json({error: err.message});
  }

  return response.status(500).json({error: "Internet Server Error"})

})

const port = 3000
app.listen(port, () => console.log("Servidor rodando na porta:", port ))