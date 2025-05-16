import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const OrderItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"OrderItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Cart" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quantity" source="quantity" />{" "}
      </Datagrid>
    </List>
  );
};
