import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { CartList } from "./cart/CartList";
import { CartCreate } from "./cart/CartCreate";
import { CartEdit } from "./cart/CartEdit";
import { CartShow } from "./cart/CartShow";
import { CartItemList } from "./cartItem/CartItemList";
import { CartItemCreate } from "./cartItem/CartItemCreate";
import { CartItemEdit } from "./cartItem/CartItemEdit";
import { CartItemShow } from "./cartItem/CartItemShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { OrderItemList } from "./orderItem/OrderItemList";
import { OrderItemCreate } from "./orderItem/OrderItemCreate";
import { OrderItemEdit } from "./orderItem/OrderItemEdit";
import { OrderItemShow } from "./orderItem/OrderItemShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { SizeList } from "./size/SizeList";
import { SizeCreate } from "./size/SizeCreate";
import { SizeEdit } from "./size/SizeEdit";
import { SizeShow } from "./size/SizeShow";
import { ColorList } from "./color/ColorList";
import { ColorCreate } from "./color/ColorCreate";
import { ColorEdit } from "./color/ColorEdit";
import { ColorShow } from "./color/ColorShow";
import { ProductVariantList } from "./productVariant/ProductVariantList";
import { ProductVariantCreate } from "./productVariant/ProductVariantCreate";
import { ProductVariantEdit } from "./productVariant/ProductVariantEdit";
import { ProductVariantShow } from "./productVariant/ProductVariantShow";
import { TimerList } from "./timer/TimerList";
import { TimerCreate } from "./timer/TimerCreate";
import { TimerEdit } from "./timer/TimerEdit";
import { TimerShow } from "./timer/TimerShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"test"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="Cart"
          list={CartList}
          edit={CartEdit}
          create={CartCreate}
          show={CartShow}
        />
        <Resource
          name="CartItem"
          list={CartItemList}
          edit={CartItemEdit}
          create={CartItemCreate}
          show={CartItemShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="OrderItem"
          list={OrderItemList}
          edit={OrderItemEdit}
          create={OrderItemCreate}
          show={OrderItemShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Size"
          list={SizeList}
          edit={SizeEdit}
          create={SizeCreate}
          show={SizeShow}
        />
        <Resource
          name="Color"
          list={ColorList}
          edit={ColorEdit}
          create={ColorCreate}
          show={ColorShow}
        />
        <Resource
          name="ProductVariant"
          list={ProductVariantList}
          edit={ProductVariantEdit}
          create={ProductVariantCreate}
          show={ProductVariantShow}
        />
        <Resource
          name="Timer"
          list={TimerList}
          edit={TimerEdit}
          create={TimerCreate}
          show={TimerShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
