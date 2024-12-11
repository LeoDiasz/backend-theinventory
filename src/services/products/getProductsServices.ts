import { ProductDTO } from "../../dto/products";
import admin from "firebase-admin";

export class GetProductsServices {
  async services() {
    const data = await admin
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id}));

        return products
      });

    return data
  }
}
