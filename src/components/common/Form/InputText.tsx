import {
  TextInput,
  TextInputProps as MantineTextInputProps,
} from "@mantine/core";
import {
  Controller,
  FieldError,
  RefCallBack,
  useFormContext,
} from "react-hook-form";
import { IconType } from "react-icons/lib";

type InputTextProps = {
  name: string;
  label?: string;
  size?: string;
  radius?: string;
  icon?: IconType;
  description?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
} & Omit<MantineTextInputProps, "icon">;

type InputTextPureProps = {
  label?: string;
  icon?: IconType;
  description?: string;
  placeholder?: string;
  error?: FieldError;
  innerRef: RefCallBack;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
};

export const InputText = ({ name, icon, ...props }: InputTextProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState }) => {
        const { error } = fieldState;
        return (
          <InputTextPure
            {...field}
            {...props}
            innerRef={ref}
            error={error}
            icon={icon}
          />
        );
      }}
    />
  );
};

export const InputTextPure = ({
  icon: Icon,
  label,
  placeholder,
  error,
  innerRef,
  onChange,
  value,
  ...props
}: InputTextPureProps) => {
  return (
    <TextInput
      ref={innerRef}
      label={label}
      placeholder={placeholder || label}
      icon={Icon ? <Icon size={22} /> : null}
      error={error?.message}
      onChange={onChange}
      value={value ?? ""}
      {...props}
    />
  );
};
