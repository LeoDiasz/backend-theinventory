import { Request, Response } from "express";
import { AuthenticateUserServices } from "../../services/user/authenticateUserServices";


export class AuthenticateUserController {
    async execute(request: Request, response: Response) {
        
        const authenticateUserServices = new AuthenticateUserServices();
        
        const responseService = authenticateUserServices.service(request);

        return response.status(200).json(responseService);
    }        
}