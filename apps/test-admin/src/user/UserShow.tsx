import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { PAYMENT_TITLE_FIELD } from "../payment/PaymentTitle";
import { CART_TITLE_FIELD } from "../cart/CartTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Age" source="age" />
        <ReferenceField label="Cart" source="cart.id" reference="Cart">
          <TextField source={CART_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="Inactive" source="inactive" />
        <BooleanField label="Is Admin" source="isAdmin" />
        <TextField label="Mobile" source="mobile" />
        <TextField label="Name" source="name" />
        <ReferenceManyField
          reference="Address"
          target="userid"
          label="Addresses"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Address" source="address" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Primary" source="isPrimary" />
            <TextField label="Pincode" source="pincode" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Order" target="userId" label="Orders">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Address"
              source="address.id"
              reference="Address"
            >
              <TextField source={ADDRESS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Payment"
              source="payment.id"
              reference="Payment"
            >
              <TextField source={PAYMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Payment Id" source="paymentId" />
            <TextField label="Status" source="status" />
            <TextField label="Total" source="total" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
