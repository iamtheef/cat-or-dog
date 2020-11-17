import React, { createContext, useState } from "react";
import useInput from "../Hooks/useInput";
import useFile from "../Hooks/useFile";

type Props = {
  children: React.ReactNode;
};

export const InputContext = createContext<any>(undefined);

export function InputProvider({ children }: Props) {
  const FILE_PLACEHOLDER = "or upload an image";

  const [filename, setFilename] = useState(FILE_PLACEHOLDER);
  const [input, setInput, resetInput] = useInput("");
  const [isLink, setIsLink] = useState<boolean>(true);
  const [file, setFile, resetFile] = useFile(undefined);

  const handleFile = (e: any) => {
    setIsLink(false);
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setInput(URL.createObjectURL(e.target.files[0]));
  };

  const handleLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLink(true);
    resetFile();
    setFilename(FILE_PLACEHOLDER);
    setInput(e.target.value);
  };

  return (
    <InputContext.Provider
      value={{
        filename,
        input,
        file,
        isLink,
        handleLink,
        setIsLink,
        handleFile,
        resetInput,
      }}
    >
      {children}
    </InputContext.Provider>
  );
}
