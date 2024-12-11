import { Request, Response } from "express";
import { GetProductServices } from "../../services/products/getProductServices";

export class GetProductController {
    async execute(request: Request, response: Response) {
        
        const getProductServices = new GetProductServices();

        const responseService = await getProductServices.service(request);
        
        return response.status(200).json(responseService);
    }
}