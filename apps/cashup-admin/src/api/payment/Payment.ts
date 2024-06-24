import { Transaction } from "../transaction/Transaction";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  transactionDate: Date | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
