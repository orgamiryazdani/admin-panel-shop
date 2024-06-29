import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Provider } from "react-redux";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./pages/Products";
import { Toaster } from "react-hot-toast";
import CreateProduct from "./pages/CreateProduct";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Provider store={store}>
        <Routes>
          <Route
            path='/'
            element={<Products />}
          />
          <Route
            path='/add-product'
            element={<CreateProduct />}
          />
          <Route
            path='/category'
            element={<AppLayout />}
          />
        </Routes>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
