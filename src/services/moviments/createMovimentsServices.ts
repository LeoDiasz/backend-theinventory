import admin from "firebase-admin"
import { prisma } from "../../api/prisma";

type ICreateMovimentRequest = {
    amount: number;
    idProduct: string;
    type: string;
}

export class CreateMovimentServices {

    async service(request: ICreateMovimentRequest){
        const amountRequest = Number(request.amount)
        console.log("Amount", amountRequest)
        const dataFormatted = {...request, amount: Number(request.amount)}
        console.log("DAtas", request)
    

        const data = await prisma.product.findFirst({where: {id: request.idProduct}})
        let dataAmount = 0
        const amountProduct = Number(data?.amount)

        console.log("amountProduct", amountProduct, "amountRequest", amountRequest)

        if(request.type == "Entrada" && amountProduct) {
            dataAmount+= Number(amountProduct + amountRequest)
        } else if (request.type == "Saída" && amountProduct) {
            dataAmount+= Number(amountProduct - amountRequest)

        }  
        console.log("DataAmount", dataAmount)

        await prisma.moviment.create({data: dataFormatted})
        await prisma.product.update({where: {id: request.idProduct}, data: {...data, amount: dataAmount}})

    }
}