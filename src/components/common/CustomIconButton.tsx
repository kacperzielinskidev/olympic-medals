import Link from "next/link";
import type { IconType } from "react-icons/lib";

interface ICustomIconButton {
  onClick?: () => void;
  href?: string;
  tooltip?: string;
  icon: IconType;
  className?: string;
}

export const CustomIconButton = ({
  onClick,
  href,
  icon: Icon,
  className,
}: ICustomIconButton) => {
  if (href) {
    return (
      <Link href={href} className={`${className ?? ""}`}>
        <Icon />
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${className ?? ""}`}>
      <Icon />
    </button>
  );
};
