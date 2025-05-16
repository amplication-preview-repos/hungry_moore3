import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TIMER_TITLE_FIELD } from "./TimerTitle";

export const TimerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Discount" source="discount" />
        <TextField label="Discription" source="discription" />
        <TextField label="Endson" source="endson" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceManyField
          reference="Product"
          target="timerid"
          label="Products"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Description" source="description" />
            <TextField label="Discount" source="discount" />
            <TextField label="ID" source="id" />
            <TextField label="Images" source="images" />
            <TextField label="Name" source="name" />
            <TextField label="Price" source="price" />
            <ReferenceField label="Timer" source="timer.id" reference="Timer">
              <TextField source={TIMER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
