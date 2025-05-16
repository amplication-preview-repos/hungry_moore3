import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CartItemTitle } from "../cartItem/CartItemTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";
import { ColorTitle } from "../color/ColorTitle";
import { SizeTitle } from "../size/SizeTitle";
import { TimerTitle } from "../timer/TimerTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="cartItem" reference="CartItem">
          <SelectArrayInput
            optionText={CartItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="cartItems" reference="OrderItem">
          <SelectArrayInput
            optionText={OrderItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="color" reference="Color">
          <SelectArrayInput
            optionText={ColorTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Description" source="description" />
        <NumberInput label="Discount" source="discount" />
        <TextInput label="Images" source="images" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
        <ReferenceArrayInput source="size" reference="Size">
          <SelectArrayInput
            optionText={SizeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="timer.id" reference="Timer" label="Timer">
          <SelectInput optionText={TimerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="variants" reference="ProductVariant">
          <SelectArrayInput
            optionText={ProductVariantTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
