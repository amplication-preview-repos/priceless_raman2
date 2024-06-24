import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  payment?: PaymentWhereUniqueInput | null;
  status?: "Option1" | null;
  transactionDate?: Date | null;
};
