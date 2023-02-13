import type { ButtonProps as MantineButtonProps } from "@mantine/core";
import { Button as MantineButton } from "@mantine/core";

export type ButtonProps = {
  custom?: string;
  onClick?: () => void;
} & MantineButtonProps;

const buttonColor = (color?: string) => {
  switch (color) {
    case "primary":
      return `bg-primary hover:bg-primarydark active:bg-primarydark text-white`;
    case "secondary":
      return `bg-gray-200 hover:bg-gray-300 text-gray-500 active:text-gray-700`;
    case "outline":
      return `bg-transparent hover:bg-[rgba(0,0,0,.1)] border border-gray-400 text-gray-600 active:text-gray-700`;
    case "success":
      return `bg-emerald-400 hover:bg-emerald-600 active:bg-primary-dark text-white`;
    case "danger":
      return `bg-red-400 hover:bg-red-500 active:bg-primary-dark text-white`;
    case "transparent":
      return "bg-transparent hover:bg-[rgba(0,0,0,.1)] border border-transparent hover:border-gray-400 text-gray-600 active:text-gray-700";
    default:
      return ``;
  }
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <MantineButton
      {...props}
      className={`${buttonColor(
        props?.custom
      )} transition disabled:border-gray-300 disabled:bg-gray-300 disabled:text-gray-100`}
    >
      {children}
    </MantineButton>
  );
};
