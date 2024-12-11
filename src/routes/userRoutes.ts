import Router from "express"
import { AuthenticateUserController } from "../controller/user/authenticateUserController";
import { GetProfileUserController } from "../controller/user/getProfileUserController";

export const userRoutes = Router();

userRoutes.post("/user/authenticate", new AuthenticateUserController().execute);
userRoutes.get("/user/profile", new GetProfileUserController().execute);