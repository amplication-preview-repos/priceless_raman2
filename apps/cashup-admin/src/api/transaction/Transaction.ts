import { Payment } from "../payment/Payment";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  id: string;
  payment?: Payment | null;
  status?: "Option1" | null;
  transactionDate: Date | null;
  updatedAt: Date;
};
