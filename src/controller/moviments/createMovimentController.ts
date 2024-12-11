import { Request, Response } from "express";
import { GetMovimentsServices } from "../../services/moviments/getMovimentsServices";
import { CreateMovimentServices } from "../../services/moviments/createMovimentsServices";

export class CreateMovimentController {
    async execute(request: Request, response: Response) {
        const body = request.body;
        const createMovimentServices = new CreateMovimentServices();

        const resultService = await createMovimentServices.service(body);

        return response.status(201).json(resultService)
    }
}