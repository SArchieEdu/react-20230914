import { Provider } from "react-redux";
import { MainPage } from "./pages/Main/component";
import { BrowserRouter, Routes } from "react-router-dom";

import store from "./redux";
import { Route } from "react-router-dom";
import { ProductsPage } from "./pages/Products/component";
import { Product } from "./components/Product/component";
import { Navigate } from "react-router-dom";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <header>Header</header>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="products" element={<ProductsPage />}>
              <Route index element={<div>Select Product</div>} />
              <Route path=":productId" element={<Product />}>
                <Route index element={<Navigate to="details" replace />} />
                <Route path="details" element={<div>Details</div>} />
                <Route path="reviews" element={<div>Reviews</div>} />
              </Route>
            </Route>
            <Route path="cart" element={<div>Cart</div>} />
            <Route path="*" element={<div>NotFound</div>} />
          </Routes>
          <footer>Footer</footer>
        </div>
      </BrowserRouter>
    </Provider>
  );
};
