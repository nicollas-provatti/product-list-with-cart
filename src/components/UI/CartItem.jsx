import { useContext } from "react";
import { currencyFormatter } from "../../util/formathing";
import IconRemoveItem from "../Icons/IconRemoveItem";
import CartContext from "../../context/CartContext";

export default function CartItem({ item }) {
  const { removeAll } = useContext(CartContext);

  const { id, name, quantity, price } = item;
  return (
    <div className="flex justify-between w-full pb-4 border-b border-[var(--borda)]">
      <div className="flex flex-col gap-2">
        <p className="text-[var(--texto-principal)] font-semibold">{name}</p>
        <div className="flex gap-3">
          <p className="text-[var(--destaque)] font-semibold pr-1">{quantity}x</p>
          <p className="text-[var(--texto-terciario)] font-extralight">@{currencyFormatter.format(price)}</p>
          <p className="text-[var(--texto-secundario)] font-semibold">@{currencyFormatter.format(quantity * price)}</p>
        </div>
      </div>
      <button onClick={() => removeAll(id)} className="self-center cursor-pointer">
        <IconRemoveItem />
      </button>
    </div>
  );
}
