import { createContext, useContext, useState } from "react";
import { Transaction } from "../types";

interface RootCtx {
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
}

interface Props {
  children: React.ReactNode;
}

const RootContex = createContext<RootCtx | null>(null);

export const RootProvider = ({ children }: Props) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  return (
    <RootContex.Provider
      value={{
        transactions,
        setTransactions,
      }}
    >
      {children}
    </RootContex.Provider>
  );
};

export const useRootContext = () => {
  const context = useContext(RootContex);
  if (!context) {
    throw new Error("error related to context");
  }
  return context;
};
