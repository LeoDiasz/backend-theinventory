import { Router } from "express";
import { getMovimentsController } from "../controller/moviments/getMovimentsController";
import { CreateMovimentController } from "../controller/moviments/createMovimentController";

export const movimentsRoutes = Router();

movimentsRoutes.get("/moviments", new getMovimentsController().execute);
movimentsRoutes.post("/moviments", new CreateMovimentController().execute);


