import { useState } from "react";

interface Props {
  value: boolean;
  onToggle: () => void;
  onTrue: () => void;
  onFalse: () => void;
}

export const useBoolean = (): Props => {
  const [value, setValue] = useState<boolean>(false);
  const onToggle = (): void => setValue(!value);
  const onTrue = (): void => setValue(true);
  const onFalse = (): void => setValue(false);

  return {
    value,
    onToggle,
    onFalse,
    onTrue,
  };
};
