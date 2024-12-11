import { Router } from "express";
import { getProductsController } from "../controller/products/getProductsController";
import { CreateProductController } from "../controller/products/createProductController";

export const productsRoutes = Router();

productsRoutes.post("/products", new CreateProductController().execute);
productsRoutes.get("/products", new getProductsController().execute );