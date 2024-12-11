import admin from "firebase-admin"
import { prisma } from "../../api/prisma";

type ICreateMovimentRequest = {
    amount: number;
    idProduct: string;
    type: string;
}

export class CreateMovimentServices {

    async service(request: ICreateMovimentRequest){
        const dataFormatted = {...request}

        await prisma.moviment.create({
            data: {...dataFormatted}
        })

    }
}