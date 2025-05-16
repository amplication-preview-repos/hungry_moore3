import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Amount" source="amount" />
        <TextInput label="From Field" source="fromField" />
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "PENDING", value: "PENDING" },
            { label: "FAILED", value: "FAILED" },
            { label: "SUCCESS", value: "SUCCESS" },
            { label: "REFUNDED", value: "REFUNDED" },
            { label: "CANCELLED", value: "CANCELLED" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="To" source="to" />
        <TextInput label="Transaction Id" source="transactionId" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "CASH_ON_DELIVERY", value: "CASH_ON_DELIVERY" },
            { label: "CARD", value: "CARD" },
            { label: "UPI", value: "UPI" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
