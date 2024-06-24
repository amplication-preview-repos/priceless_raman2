import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  payment?: PaymentWhereUniqueInput;
  status?: "Option1";
  transactionDate?: DateTimeNullableFilter;
};
