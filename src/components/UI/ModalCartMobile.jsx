import { useState, useEffect } from "react";
import Cart from "../Cart";

export default function ModalCartMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1280);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) return null;

  return (
    <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box p-0 px-3.5 py-6 bg-[var(--fundo-principal)] ">
        <Cart mobile />
      </div>
    </dialog>
  );
}
