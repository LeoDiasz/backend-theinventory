import { Request, Response } from "express";
import { GetProfileUserServices } from "../../services/user/getProfileUserServices";

export class GetProfileUserController {

    async execute(request: Request, response: Response) {
        
        const getProfileUserServices = new GetProfileUserServices();

        const responseService = await getProfileUserServices.service(request);

        return response.status(200).json(responseService);
    }
}