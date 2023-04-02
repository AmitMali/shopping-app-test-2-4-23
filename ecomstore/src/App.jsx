import StorePage from "./StorePage.jsx";
import { Routes, Route } from "react-router-dom";
import Layoute from "./Layoute.jsx";
import CartPage from "./CartPage.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layoute />}>
          <Route path="/" element={<StorePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
