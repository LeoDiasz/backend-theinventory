import { movimentDTO } from "./moviments";

export type ProductDTO = {
    id: string;
    name: string;
    type: string;
    codBar: string;
    amount: number;
    amountMin: number;
    amountMax: number;
    date: Date;
    moviments: movimentDTO[]
}