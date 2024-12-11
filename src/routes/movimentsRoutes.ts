import { Router } from "express";
import { getMovimentsController } from "../controller/moviments/getMovimentsController";

export const movimentsRoutes = Router();

movimentsRoutes.get("/moviments", new getMovimentsController().execute);


