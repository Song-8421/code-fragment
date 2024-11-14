import { DataType } from "@renderer/data";
import { createContext } from "react";

export interface CodeContextProps {
  data: DataType[];
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
}

export const CodeContext = createContext<CodeContextProps | undefined>(undefined);
