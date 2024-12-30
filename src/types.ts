export interface Transaction {
  id?: string;
  operation: string;
  currency1: string;
  amount1: string;
  currency2: string;
  amount2: string;
  rate: string;
  time: string;
  client: string;
}
