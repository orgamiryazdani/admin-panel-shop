import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Provider } from "react-redux";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Routes>
          <Route
            path='/'
            element={<AppLayout />}
          />
          <Route
            path='/add-product'
            element={<AppLayout />}
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
