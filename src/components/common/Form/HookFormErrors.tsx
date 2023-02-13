import { useFormContext } from "react-hook-form";

export const HookFormErrors = () => {
  const { formState } = useFormContext();
  const { errors } = formState;

  return (
    <div className="mt-2">
      {Object.values(errors).length > 0 &&
        Object.values(errors).map((error, index) => {
          if (error && error?.message)
            return <div key={index}>{error?.message?.toString()}</div>;
        })}
    </div>
  );
};
