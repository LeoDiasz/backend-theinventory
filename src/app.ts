import express, {Request, Response, NextFunction} from "express";
import admin from "firebase-admin";
import "express-async-errors";
import "dotenv/config";

import http from "http";

import {AppError} from "./errors/appError"
import cors from "cors"


const app = express();

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const serverHttp = http.createServer(app);


app.use(express.json());
app.use(cors())



app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    return response.status(err.status).json({error: err.message});
  }

  return response.status(500).json({error: "Internet Server Error"})

})