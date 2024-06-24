import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  payment?: PaymentWhereUniqueInput | null;
  status?: "Option1" | null;
  transactionDate?: Date | null;
};
