import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CART_TITLE_FIELD } from "../cart/CartTitle";
import { COLOR_TITLE_FIELD } from "../color/ColorTitle";
import { PRODUCT_TITLE_FIELD } from "./ProductTitle";
import { SIZE_TITLE_FIELD } from "../size/SizeTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { TIMER_TITLE_FIELD } from "../timer/TimerTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Description" source="description" />
        <TextField label="Discount" source="discount" />
        <TextField label="ID" source="id" />
        <TextField label="Images" source="images" />
        <TextField label="Name" source="name" />
        <TextField label="Price" source="price" />
        <ReferenceField label="Timer" source="timer.id" reference="Timer">
          <TextField source={TIMER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="CartItem"
          target="productId"
          label="CartItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Cart" source="cart.id" reference="Cart">
              <TextField source={CART_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Color" source="color.id" reference="Color">
              <TextField source={COLOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Price" source="price" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <ReferenceField label="Size" source="size.id" reference="Size">
              <TextField source={SIZE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrderItem"
          target="productId"
          label="OrderItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Cart" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Price" source="price" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Color"
          target="productint"
          label="Colors"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Color" source="color" />
            <TextField label="Color Guid" source="colorGuid" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Size" target="productint" label="Sizes">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Size" source="size" />
            <TextField label="Size Guid" source="sizeGuid" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductVariant"
          target="productId"
          label="ProductVariants"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Color" source="color.id" reference="Color">
              <TextField source={COLOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Price" source="price" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <ReferenceField label="Size" source="size.id" reference="Size">
              <TextField source={SIZE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Sku" source="sku" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
