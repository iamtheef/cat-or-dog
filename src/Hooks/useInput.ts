import { useState } from "react";

export default (initialVal: string) => {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e: string) => {
    setValue(e);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset] as const;
};
