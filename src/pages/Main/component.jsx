import { Product } from "../../components/Product/component";
import { AuthorizationForm } from "../../components/AuthorizationForm/component";
import { UserProvider } from "../../contexts/User";
import { useDispatch, useSelector } from "react-redux";
import {
  selectHeadphoneIds,
  selectHeadphoneLoadingStatus,
} from "../../redux/entities/headphone/selectors";
import { useEffect } from "react";
import { getHeadphones } from "../../redux/entities/headphone/thunks/get-headphones";
import { REQUEST_STATUS } from "../../constants/statuses";

export const MainPage = () => {
  const productIds = useSelector(selectHeadphoneIds);
  const loadingStatus = useSelector(selectHeadphoneLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeadphones());
  }, []);

  return (
    <UserProvider>
      <div>
        <AuthorizationForm />
        {loadingStatus === REQUEST_STATUS.pending ? (
          <div>Loading...</div>
        ) : (
          productIds.map((id) => <Product key={id} productId={id} />)
        )}
      </div>
    </UserProvider>
  );
};
