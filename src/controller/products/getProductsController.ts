import { Request, Response } from "express";
import { GetProductsServices } from "../../services/products/getProductsServices";


export class getProductsController {
    async execute(request: Request, response: Response) {
        
        const getProductsServices = new GetProductsServices();
        
        const responseService = await getProductsServices.services(request);

        return response.status(200).json(responseService);
    }
}