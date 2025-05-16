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
import { COLOR_TITLE_FIELD } from "./ColorTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { SIZE_TITLE_FIELD } from "../size/SizeTitle";

export const ColorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Color" source="color" />
        <TextField label="Color Guid" source="colorGuid" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="CartItem"
          target="colorid"
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
          reference="ProductVariant"
          target="colorId"
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
