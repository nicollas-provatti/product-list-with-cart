export default function HighlightButton({ children, onClick }) {
  return (
    <button
      className="w-full bg-[var(--fundo-botao-destaque)] text-[var(--texto-botao-destaque)] p-4 rounded-full cursor-pointer font-semibold text-lg transition-all duration-150 ease-in-out hover:bg-[var(--fundo-hover-botao-destaque)]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
