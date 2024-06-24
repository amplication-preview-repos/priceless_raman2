import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentId?: SortOrder;
  status?: SortOrder;
  transactionDate?: SortOrder;
  updatedAt?: SortOrder;
};
