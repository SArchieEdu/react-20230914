import { mocks } from "../../constants/mock";
import { Product } from "../../components/Product/component";
import { AuthorizationForm } from "../../components/AuthorizationForm/component";
import { UserContext, UserProvider } from "../../contexts/User";

export const MainPage = () => {
  if (!mocks?.length) {
    return null;
  }

  return (
    <UserProvider>
      <div>
        <AuthorizationForm />
        {mocks?.length > 0 &&
          mocks.map(({ id, name }) => <Product key={id} name={name} />)}
      </div>
    </UserProvider>
  );
};
