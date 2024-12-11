import admin from "firebase-admin"
import { ProductDTO } from "../../dto/products";
import { movimentDTO } from "../../dto/moviments";


type ICreateProductRequest = {
    uid?: string;
    name: string;
    codBar: string;
    type: string;
    amount: number;
    amountMin: number;
    amountMax: number;
    date?: Date;
    moviments?: movimentDTO[]
}

export class CreateProductServices {

    async service(request: ICreateProductRequest){

        const dataFormatted = {...request, date: new Date()}

        const id = await admin.firestore()
        .collection("products")
        .add(dataFormatted)
        .then(snapshot => ({uid: snapshot.id}))

        return id
    }
}