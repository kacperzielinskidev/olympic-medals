import { NumberInput, NumberInputProps } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";
import { IconType } from "react-icons/lib";

export interface InputNumberProps extends Omit<NumberInputProps, "icon"> {
  name: string;
  icon?: IconType;
}

export const InputNumber = ({
  name,
  label,
  icon: Icon,
  required,
  disabled,
  ...props
}: InputNumberProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState }) => {
        const { error } = fieldState;
        return (
          <NumberInput
            ref={ref}
            label={label}
            icon={Icon ? <Icon color="currentColor" size={18} /> : null}
            error={error?.message}
            disabled={disabled}
            required={required}
            {...field}
            {...props}
          />
        );
      }}
    />
  );
};
