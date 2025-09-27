import { useContext } from "react";
/* import { motion } from "framer-motion"; */
import IconOrderConfirmed from "../Icons/IconOrderConfirmed";
import CartContext from "../../context/CartContext";
import HighlightButton from "./HighlightButton";
import OrderItem from "../OrderItem";
import { currencyFormatter } from "../../util/formathing";

export default function ModalOrder() {
  const { items, clearCart } = useContext(CartContext);

  const totalAmount = items.reduce(
    (amount, currentItem) => amount + currentItem.price * currentItem.quantity,
    0
  );

  return (
    <dialog
      id="my_modal_2"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box p-0 px-3 py-6 flex flex-col gap-5 bg-[var(--fundo-modal)]">
        <IconOrderConfirmed />
        <h3 className="text-5xl font-bold text-[var(--texto-principal)]">
          Order <br /> Confirmed
        </h3>
        <p className="text-xl py-4 text-[var(--texto-secundario)]">
          We hope you enjoy your food!
        </p>
        <div className="flex flex-col gap-5 bg-[var(--fundo-principal)] text-black px-9 py-6 rounded-lg">
          {items.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
          <div className="flex items-center justify-between py-6">
            <p className="text-[var(--texto-principal)]">Orde Total</p>
            <p className="text-[var(--texto-principal)] font-bold text-3xl">
              {currencyFormatter.format(totalAmount)}
            </p>
          </div>
        </div>
        <div className="self-stretch modal-action">
          <form method="dialog" className="w-full">
            <HighlightButton onClick={clearCart}>
              Start New Order
            </HighlightButton>
            {
              <button className="absolute border border-[var(--destaque)] text-[var(--texto-botao-fechar)] right-3 top-3 bg-[var(--fundo-botao-fechar)] btn-sm btn-circle cursor-pointer transition-all duration-150 ease-in hover:text-[var(--hover-texto-botao-fechar)] hover:bg-[var(--hover-fundo-botao-fechar)]">
                ✕
              </button>
            }
          </form>
        </div>
      </div>
    </dialog>
  );
}
