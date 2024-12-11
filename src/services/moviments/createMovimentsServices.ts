import admin from "firebase-admin"

type ICreateMovimentRequest = {
    amount: number;
    idProduct: string;
    type: string;
    date?: Date;
}

export class CreateMovimentServices {

    async service(request: ICreateMovimentRequest){

        const dataFormatted = {...request, date: new Date()}

        const id = await admin.firestore()
        .collection("moviments")
        .add(dataFormatted)
        .then(snapshot => {
            return snapshot.id
        })

        return id
    }
}