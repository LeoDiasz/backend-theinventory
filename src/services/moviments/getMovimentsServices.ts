import admin from "firebase-admin";

type IMovimentsRequest = {
    uid: string;
}

export class GetMovimentsServices {

    async services({uid}: IMovimentsRequest) {
        const data = await admin
          .firestore()
          .collection("moviments")
          .where("idProduct", "==", uid)
          .get()
          .then((snapshot) => {
            const moviments = snapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id}));
    
            return moviments
          });
    
        return data
      }
}