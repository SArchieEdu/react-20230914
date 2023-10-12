import { Product } from "../../components/Product/component";
import { AuthorizationForm } from "../../components/AuthorizationForm/component";
import { UserProvider } from "../../contexts/User";
import { useSelector } from "react-redux";
import { selectHeadphoneIds } from "../../redux/entities/headphone/selectors";

export const MainPage = () => {
  const productIds = useSelector(selectHeadphoneIds);

  return (
    <UserProvider>
      <div>
        <AuthorizationForm />
        {productIds?.length > 0 &&
          productIds.map((id) => <Product key={id} productId={id} />)}
      </div>
    </UserProvider>
  );
};
