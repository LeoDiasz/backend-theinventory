import { Request, Response } from "express";
import { GetMovimentsServices } from "../../services/moviments/getMovimentsServices";

export class getMovimentsController {
    async execute(request: Request, response: Response) {
        
        const datas = request

        const getMovimentsServices = new GetMovimentsServices();

        const resultService = await getMovimentsServices.service(request);

        return response.status(200).json(resultService)
    }
}