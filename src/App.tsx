import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<AppLayout />}
      />
      <Route
        path='/category'
        element={<AppLayout />}
      />
    </Routes>
  );
}

export default App;
