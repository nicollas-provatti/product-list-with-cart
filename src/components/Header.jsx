import { useContext } from "react";
import CartContext from "../context/CartContext";
import IconTheme from "./Icons/IconTheme";
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
  const { items } = useContext(CartContext);
  const itemsCartyQuantity = items.reduce(
    (itemsQuantity, currentItem) => itemsQuantity + currentItem.quantity,
    0
  );
 
  return (
    <header className="sticky top-0 bg-[var(--fundo-secundario)] z-10 flex items-center justify-between px-[5%] py-4 shadow-[var(--sombra)] md:px-[10%]  xl:static">
      <button className="text-[var(--destaque)] bg-[var(--fundo-principal)] rounded-2xl p-2 ">
        <IconTheme />
      </button>
      <h1 className="text-[var(--texto-principal)] font-bold text-3xl md:text-4xl xl:text-5xl xl:-order-1">
        Desserts
      </h1>
      <button
        className="flex items-center gap-1 text-[var(--destaque)] bg-[var(--fundo-principal)] rounded-2xl p-2 text-3xl cursor-pointer font-bold xl:text-3xl xl:hidden"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <FaCartShopping /> ({itemsCartyQuantity})
      </button>
    </header>
  );
}
