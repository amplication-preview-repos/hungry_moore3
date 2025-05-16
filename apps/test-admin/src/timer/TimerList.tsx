import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TimerList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Timers"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Discount" source="discount" />
        <TextField label="Discription" source="discription" />
        <TextField label="Endson" source="endson" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />{" "}
      </Datagrid>
    </List>
  );
};
