import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { ColorTitle } from "../color/ColorTitle";
import { ProductTitle } from "../product/ProductTitle";
import { SizeTitle } from "../size/SizeTitle";

export const ProductVariantCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="color.id" reference="Color" label="Color">
          <SelectInput optionText={ColorTitle} />
        </ReferenceInput>
        <NumberInput label="Price" source="price" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <ReferenceInput source="size.id" reference="Size" label="Size">
          <SelectInput optionText={SizeTitle} />
        </ReferenceInput>
        <TextInput label="Sku" source="sku" />
      </SimpleForm>
    </Create>
  );
};
