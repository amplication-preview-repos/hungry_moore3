import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { COLOR_TITLE_FIELD } from "../color/ColorTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { SIZE_TITLE_FIELD } from "../size/SizeTitle";

export const ProductVariantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Color" source="color.id" reference="Color">
          <TextField source={COLOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quantity" source="quantity" />
        <ReferenceField label="Size" source="size.id" reference="Size">
          <TextField source={SIZE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Sku" source="sku" />
      </SimpleShowLayout>
    </Show>
  );
};
