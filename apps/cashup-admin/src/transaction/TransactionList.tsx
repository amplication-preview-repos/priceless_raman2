import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PAYMENT_TITLE_FIELD } from "../payment/PaymentTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Payment" source="payment.id" reference="Payment">
          <TextField source={PAYMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <TextField label="transactionDate" source="transactionDate" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
