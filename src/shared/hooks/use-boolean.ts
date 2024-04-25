import { useState } from "react";

export const useBoolean = () => {
  const [value, setValue] = useState<boolean>(false);
  const onToggle = () => setValue(!value);
  const onTrue = () => setValue(true);
  const onFalse = () => setValue(false);

  return {
    value,
    onToggle,
    onFalse,
    onTrue,
  };
};
