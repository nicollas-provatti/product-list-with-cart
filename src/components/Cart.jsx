import { useContext } from "react";
import { currencyFormatter } from "../util/formathing";
import CartContext from "../context/CartContext";
import IconEmptyCart from "./Icons/IconEmptyCart";
import CartItem from "./UI/CartItem";
import IconCarbornNeutral from "./Icons/IconCarbornNeutral";
import HighlightButton from "./UI/HighlightButton";

export default function Cart({ mobile }) {
  const { items } = useContext(CartContext);
  const itemsCartyQuantity = items.reduce(
    (itemsQuantity, currentItem) => itemsQuantity + currentItem.quantity,
    0
  );

  const totalAmount = items.reduce(
    (amount, currentItem) => amount + currentItem.price * currentItem.quantity,
    0
  );

  let classes =
    "flex-col self-start gap-10 items-start bg-[var(--fundo-carro)] rounded-xl px-4 py-6 flex";

  if (!mobile) {
    classes =
      "hidden sticky top-5 flex-col self-start gap-10 items-start w-1/4 bg-[var(--fundo-carro)] rounded-xl px-4 py-6 xl:flex";
  }

  function handleConfirmedOrder() {
    document.getElementById("my_modal_1")?.close();
    document.getElementById("my_modal_2")?.showModal();
  }

  return (
    <>
      {mobile && (
        <form method="dialog">
          <button className="absolute border border-[var(--destaque)] text-[var(--texto-botao-fechar)] right-6 top-9 bg-[var(--fundo-botao-fechar)] btn-sm btn-circle cursor-pointer transition-all duration-150 ease-in hover:text-[var(--hover-texto-botao-fechar)] hover:bg-[var(--hover-fundo-botao-fechar)]">
            ✕
          </button>
        </form>
      )}
      <div className={classes}>
        <p className="text-[var(--destaque)] text-xl font-bold md:text-2xl xl:text-3xl">
          Your Cart ({itemsCartyQuantity})
        </p>
        {items.length === 0 && (
          <div className="self-center">
            <IconEmptyCart />
          </div>
        )}
        {items.length === 0 && (
          <p className="w-full text-[var(--texto-principal)] font-light text-center">
            Your added items will appear here
          </p>
        )}

        {items.length > 0 && (
          <div className="flex flex-col w-full gap-6">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className="flex items-center justify-between mt-3">
              <p className="text-[var(--texto-principal)]">Order Total</p>
              <p className="text-[var(--texto-principal)] font-bold text-3xl">
                {currencyFormatter.format(totalAmount)}
              </p>
            </div>
            <div className="flex gap-3 justify-center bg-[var(--fundo-principal)] p-4 rounded-xl">
              <IconCarbornNeutral />
              <p className="text-[var(--texto-principal)]">
                This is a{" "}
                <span className="text-[var(--texto-principal)] font-semibold">
                  carborn-neutral
                </span>{" "}
                delivery
              </p>
            </div>
            <HighlightButton onClick={handleConfirmedOrder}>
              Confirm Order
            </HighlightButton>
          </div>
        )}
      </div>
    </>
  );
}
