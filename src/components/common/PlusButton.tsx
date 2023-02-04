import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";

interface IPlusButton {
  onClick?: () => void;
  href?: string;
  tooltip?: string;
}

export const PlusButton = ({ onClick, href }: IPlusButton) => {
  if (href) {
    return (
      <Link
        href={href}
        className="cursor-pointer rounded-md border-2 border-emerald-500 p-0.5 text-2xl text-emerald-500 transition hover:bg-emerald-500 hover:text-gray-100"
      >
        <AiOutlinePlus />
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer rounded-md border-2 border-emerald-500 p-0.5 text-2xl text-emerald-500 transition hover:bg-emerald-500 hover:text-gray-100"
    >
      <AiOutlinePlus />
    </button>
  );
};
