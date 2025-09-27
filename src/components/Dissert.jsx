import { useContext } from "react";
import { currencyFormatter } from "../util/formathing";
import IconCart from "./Icons/IconCart";
import CartContext from "../context/CartContext";
import IconDecrementQuantity from "./Icons/IconDecrementQuantity";
import IconIncrementQuantity from "./Icons/IconIncrementQuantity";

export default function Dissert({ dissert }) {
  const { items, addItem, removeItem } = useContext(CartContext);

  const botaoClasses =
    "group absolute -bottom-6 left-[50%] -translate-x-[50%] flex justify-between  items-center  rounded-full border px-6 py-3 border-[var(--destaque)] font-semibold xl:px-8 xl:py-4 hover:bg-[var(--destaque)] hover:text-[var(--texto-botao-hover)] transition-all duration-150 ease-in";

  const {
    name,
    category,
    price,
    image: { mobile, tablet, desktop },
  } = dissert;

  const item = items.find((item) => item.name === name);

  return (
    <div className="overflow-hidden shadow-md rounded-xl bg-[var(--fundo-secundario)]">
      <div className="relative mb-8">
        <picture>
          <source media="(max-width: 640px)" srcSet={mobile} />
          <source media="(max-width: 1024px)" srcSet={tablet} />
          <img src={desktop} alt={name} className="w-full" />
        </picture>
        {!item ? (
          <button
            className={
              botaoClasses +
              " gap-3 text-[var(--texto-principal)] bg-[var(--fundo-botao)] cursor-pointer"
            }
            onClick={() => addItem(dissert)}
          >
            <IconCart />
            <span className="whitespace-nowrap">Add to Cart</span>
          </button>
        ) : (
          <div
            className={
              botaoClasses +
              " gap-9 text-[var(--texto-botao-destaque)] bg-[var(--fundo-botao-destaque)]"
            }
          >
            <button className="cursor-pointer" onClick={() => removeItem(item.id)}>
              <IconDecrementQuantity />
            </button>
            <p>{item.quantity}</p>
            <button className="cursor-pointer" onClick={() => addItem(item)}>
              <IconIncrementQuantity />
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1.5 px-2 pb-3">
        <p className="text-lg font-light">{category}</p>
        <h2 className="text-xl text-[var(--texto-principal)]  font-semibold">
          {name}
        </h2>
        <p className="text-xl text-[var(--destaque)] font-semibold">
          {currencyFormatter.format(price)}
        </p>
      </div>
    </div>
  );
}
