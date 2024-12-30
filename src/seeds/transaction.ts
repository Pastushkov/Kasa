import { Transaction } from "../types";

export const transactionSeed: Transaction[] = [
  {
    id: "1",
    amount1: "400",
    amount2: "16000",
    client: "1234567",
    currency1: "EUR",
    currency2: "UAH",
    operation: "Купівля",
    rate: "45",
    time: "22.02.2002",
  },
  {
    id: "2",
    amount1: "100",
    amount2: "11000",
    client: "1234567",
    currency1: "USD",
    currency2: "UAH",
    operation: "Купівля",
    rate: "41",
    time: "22.02.2002",
  },
];
