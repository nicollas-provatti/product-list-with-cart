import Disserts from "./components/Disserts";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { CartContextProvider } from "./context/CartContext";
import ModalCart from "./components/UI/ModalCartMobile";
import ModalOrder from "./components/UI/ModalOrder";

function App() {
  return (
    <CartContextProvider>
      <ModalCart />
      <ModalOrder />
      <Header />
      <main className="gap-10 px-[10%] py-10 xl:flex">
        <Disserts />
        <Cart />
      </main>
    </CartContextProvider>
  );
}

export default App;
