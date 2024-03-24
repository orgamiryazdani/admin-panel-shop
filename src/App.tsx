import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route
          path='/'
          element={<AppLayout />}
        />
        <Route
          path='/addProduct'
          element={<AppLayout />}
        />

        <Route
          path='/category'
          element={<AppLayout />}
        />
      </Routes>
    </Provider>
  );
}

export default App;
