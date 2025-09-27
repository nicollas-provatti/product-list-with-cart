import { currencyFormatter } from "../util/formathing";

export default function OrderItem({ item }) {
  const {
    image: { thumbnail },
  } = item;
  return (
    <div
      key={item.id}
      className="flex justify-between items-center pb-5 border-b border-[var(--borda)]"
    >
      <div className="flex gap-5">
        <div className="h-18 w-18">
          <img
            src={thumbnail}
            alt={item.name}
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[var(--texto-principal)] text-lg font-semibold">
            {item.name}
          </p>
          <div className="flex gap-5">
            <p className="text-[var(--destaque)] font-semibold">
              {item.quantity}x
            </p>
            <p className="text-[var(--texto-terciario)] font-semibold">
              @ {currencyFormatter.format(item.price)}
            </p>
          </div>
        </div>
      </div>
      <p className="text-[var(--texto-principal)] font-bold text-2xl">
        {currencyFormatter.format(item.price * item.quantity)}
      </p>
    </div>
  );
}
