import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { CartItemTitle } from "../cartItem/CartItemTitle";
import { ProductTitle } from "../product/ProductTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";

export const SizeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="cartItem" reference="CartItem">
          <SelectArrayInput
            optionText={CartItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <TextInput label="Size" source="size" />
        <TextInput label="Size Guid" source="sizeGuid" />
        <ReferenceArrayInput source="variants" reference="ProductVariant">
          <SelectArrayInput
            optionText={ProductVariantTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
