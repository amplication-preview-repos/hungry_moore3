import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { CartTitle } from "../cart/CartTitle";
import { ColorTitle } from "../color/ColorTitle";
import { ProductTitle } from "../product/ProductTitle";
import { SizeTitle } from "../size/SizeTitle";

export const CartItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="cart.id" reference="Cart" label="Cart">
          <SelectInput optionText={CartTitle} />
        </ReferenceInput>
        <ReferenceInput source="color.id" reference="Color" label="Color">
          <SelectInput optionText={ColorTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Price" source="price" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <ReferenceInput source="size.id" reference="Size" label="Size">
          <SelectInput optionText={SizeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
