import { prisma } from "../../api/prisma";
import { ProductDTO } from "../../dto/products";
import admin from "firebase-admin";

export class GetProductsServices {
  async services() {
    const products = await prisma.product.findMany()


    


    return products
  }
}
