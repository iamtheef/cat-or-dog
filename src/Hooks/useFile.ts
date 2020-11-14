import { useState } from "react";

export default (initialVal: any) => {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e: any) => {
    setValue(e.target.files[0]);
  };
  const reset = () => {
    setValue(undefined);
  };
  return [value, handleChange, reset];
};
