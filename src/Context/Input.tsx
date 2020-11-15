import React, { createContext, useState } from "react";
import useInput from "../Hooks/useInput";
import useFile from "../Hooks/useFile";

type Props = {
  children: React.ReactNode;
};

interface IRequest {
  input: string;
  isLink: string;
  file?: any;
}

export const InputContext = createContext<any>(undefined);

export function InputProvider({ children }: Props) {
  const FILE_PLACEHOLDER = "or upload an image";

  const [filename, setFilename] = useState(FILE_PLACEHOLDER);
  const [input, setInput, resetInput] = useInput("");
  const [isLink, setIsLink] = useState<boolean>(true);
  const [file, setFile, resetFile] = useFile(undefined);

  const handleFile = (e: any) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setInput("");
    setIsLink(false);
  };

  const handleLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetFile();
    setFilename(FILE_PLACEHOLDER);
    setInput(e.target.value);
    setIsLink(true);
  };

  return (
    <InputContext.Provider
      value={{
        handleLink,
        handleFile,
        filename,
        input,
        file,
        isLink,
      }}
    >
      {children}
    </InputContext.Provider>
  );
}
