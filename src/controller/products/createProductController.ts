import { Request, Response } from "express";
import { CreateProductServices } from "../../services/products/createProductServices";

export class CreateProductController {

    async execute(request: Request, response: Response) {
        const body = request.body;

        const createServices = new CreateProductServices();

        const responseService = await createServices.service(body);

        return response.status(201).json(responseService);

    }
}