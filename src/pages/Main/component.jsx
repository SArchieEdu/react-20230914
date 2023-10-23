import { Product } from "../../components/Product/component";
import { AuthorizationForm } from "../../components/AuthorizationForm/component";
import { UserProvider } from "../../contexts/User";
import {
  useGetHeadphonesQuery,
  useLazyGetHeadphonesQuery,
} from "../../redux/services/api";
import { useState } from "react";

export const MainPage = () => {
  const { data, isFetching } = useGetHeadphonesQuery();
  // const [loadHeadphones, { data, isFetching }] = useLazyGetHeadphonesQuery();

  return (
    <UserProvider>
      <div>
        {/* <button onClick={() => loadHeadphones()}>loadHeadphones</button> */}
        <AuthorizationForm />
        {isFetching ? (
          <div>Loading...</div>
        ) : (
          data?.map((product) => <Product key={product.id} product={product} />)
        )}
      </div>
    </UserProvider>
  );
};
