import { TextField, TextFieldProps } from "@/view/ui/TextField/TextField";
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";

type ControlledTextFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
} & TextFieldProps;

export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledTextFieldProps<T>) => {
  const {
    field,
    //: { value, onChange, ref }
  } = useController({ control: control, name: name });

  return <TextField {...field} {...rest} />;
};
