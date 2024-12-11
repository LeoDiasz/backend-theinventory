import admin from "firebase-admin";
import { prisma } from "../../api/prisma";

type IMovimentsRequest = {
    id: string;
}

export class GetMovimentsServices {

    async services({id}: IMovimentsRequest) {
      const moviments = await prisma.moviment.findMany({where: {idProduct: id}})


      return moviments
    }
}