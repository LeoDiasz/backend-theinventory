import admin from "firebase-admin";
import { prisma } from "../../api/prisma";

type IMovimentsRequest = {
    uid: string;
}

export class GetMovimentsServices {

    async services({uid}: IMovimentsRequest) {
      const moviments = await prisma.moviment.findMany()


      return moviments
    }
}