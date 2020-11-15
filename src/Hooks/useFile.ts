import { useState } from "react";

export default (initialVal: any) => {
  const [value, setValue] = useState<any>(initialVal);
  const handleChange = (file: any) => {
    setValue(file);
  };
  const reset = () => {
    setValue(undefined);
  };
  return [value, handleChange, reset];
};
