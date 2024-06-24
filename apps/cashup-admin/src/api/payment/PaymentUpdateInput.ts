import { TransactionUpdateManyWithoutPaymentsInput } from "./TransactionUpdateManyWithoutPaymentsInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  transactionDate?: Date | null;
  transactions?: TransactionUpdateManyWithoutPaymentsInput;
};
