import React, { createContext, useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export const InputContext = createContext<any>(undefined);

export function InputProvider({ children }: Props) {
  const [input, setInput] = useState("");
  const [isLink, setIsLink] = useState(true);

  useEffect(() => {});

  return (
    <InputContext.Provider
      value={{
        input,
        setInput,
        isLink,
        setIsLink,
      }}
    >
      {children}
    </InputContext.Provider>
  );
}
