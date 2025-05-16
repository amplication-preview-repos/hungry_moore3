import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";
import { UserTitle } from "../user/UserTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="address.id" reference="Address" label="Address">
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <ReferenceInput source="payment.id" reference="Payment" label="Payment">
          <SelectInput optionText={PaymentTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Payment Id" source="paymentId" />
        <ReferenceArrayInput source="products" reference="OrderItem">
          <SelectArrayInput
            optionText={OrderItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "PENDING", value: "PENDING" },
            { label: "PROCESSING", value: "PROCESSING" },
            { label: "DISPATCHED", value: "DISPATCHED" },
            { label: "SHIPPED", value: "SHIPPED" },
            { label: "DELIVERED", value: "DELIVERED" },
            { label: "CANCELLED", value: "CANCELLED" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Total" source="total" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
