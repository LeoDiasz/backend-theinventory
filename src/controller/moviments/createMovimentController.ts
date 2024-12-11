import { Request, Response } from "express";
import { GetMovimentsServices } from "../../services/moviments/getMovimentsServices";

export class CreateMovimentController {
    async execute(request: Request, response: Response) {
        const body = request.body;
        const getMovimentsServices = new GetMovimentsServices();

        const resultService = await getMovimentsServices.services(body);

        return response.status(200).json(resultService)
    }
}