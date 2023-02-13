import { useFormContext } from "react-hook-form";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";

export type InputSubmitProps = ButtonProps;

export const InputSubmit = ({
  onClick,
  children,
  ...props
}: InputSubmitProps) => {
  const { formState } = useFormContext();
  const { isSubmitting, isValid } = formState;

  return (
    <Button type={"submit"} loading={isSubmitting} onClick={onClick} {...props}>
      {children}
    </Button>
  );
};
