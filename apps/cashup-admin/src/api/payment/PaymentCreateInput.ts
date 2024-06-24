import { TransactionCreateNestedManyWithoutPaymentsInput } from "./TransactionCreateNestedManyWithoutPaymentsInput";

export type PaymentCreateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  transactionDate?: Date | null;
  transactions?: TransactionCreateNestedManyWithoutPaymentsInput;
};
