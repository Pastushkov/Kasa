import * as yup from "yup";
import { errorMessages } from "./errors";

export const addTransactionSchema = yup.object().shape({
  amount1: yup.string().required(errorMessages.required),
  amount2: yup.string().required(errorMessages.required),
  client: yup.string().required(errorMessages.required),
  clientAmount: yup.string().required(errorMessages.required),
  comment: yup.string().required(errorMessages.required),
  currency1: yup.string().required(errorMessages.required),
  currency2: yup.string().required(errorMessages.required),
  operation: yup.string().required(errorMessages.required),
  rate: yup.string().required(errorMessages.required),
  totalAmount: yup.string().required(errorMessages.required),
});
