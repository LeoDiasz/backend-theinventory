import admin from "firebase-admin";
import { movimentDTO } from "../../dto/moviments";
import { prisma } from "../../api/prisma";

type ICreateProductRequest = {
  name: string;
  codBar: string;
  type: string;
  amount: number;
  amountMin: number;
  amountMax: number;
};

export class CreateProductServices {
  async service(request: ICreateProductRequest) {
    const dataFormatted = {
      ...request,
      amount: Number(request.amount),
      amountMin: Number(request.amountMin),
      amountMax: Number(request.amountMax)
    };

    await prisma.product.create({
      data: { ...dataFormatted },
    });
  }
}
