import { Transaction } from "../../types";
import { Controller, useForm } from "react-hook-form";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { addTransactionSchema } from "../../schemas/schemas";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (newTransaction: Transaction) => void;
}

interface FormFields extends Omit<Transaction, "time"> {
  totalAmount: string;
  clientAmount: string;
  comment: string;
}

const currencies = ["USD", "EUR", "UAH"];
const operations = ["Купівля", "Продаж"];

const getCurrentTime = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  return `${day}.${month}.${year}`;
};

const AddTransactionDialog = ({ open, onClose, onSave }: Props) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    mode: "onSubmit",
    values: {
      amount1: "",
      amount2: "",
      client: "",
      clientAmount: "",
      comment: "",
      currency1: "",
      currency2: "",
      operation: "",
      rate: "",
      totalAmount: "",
    },
    resolver: yupResolver(addTransactionSchema),
  });

  const onSubmit = (data: FormFields) => {
    const newTransaction: Transaction = {
      ...data,
      time: getCurrentTime(),
    };
    onSave(newTransaction);
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Додати нову транзакцію</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Box>
            <FormControl fullWidth margin="normal">
              <InputLabel>Валюта 1</InputLabel>
              <Controller
                name="currency1"
                control={control}
                defaultValue="USD"
                render={({ field }) => (
                  <Select
                    {...field}
                    required
                    label="Валюта 1"
                    sx={{
                      width: "135px",
                    }}
                    error={!!errors.currency1}
                  >
                    {currencies.map((currency, index) => (
                      <MenuItem key={index} value={currency}>
                        {currency}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
            <Controller
              name="amount1"
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  label="Сума 1"
                  fullWidth
                  type="number"
                  margin="normal"
                  error={!!errors.amount1}
                  helperText={errors.amount1?.message}
                />
              )}
            />
          </Box>
          <Box>
            <FormControl fullWidth margin="normal">
              <InputLabel>Валюта 2</InputLabel>
              <Controller
                name="currency2"
                control={control}
                defaultValue="UAH"
                render={({ field }) => (
                  <Select
                    {...field}
                    required
                    label="Валюта 2"
                    sx={{
                      width: "135px",
                    }}
                    error={!!errors.currency2}
                  >
                    {currencies.map((currency, index) => (
                      <MenuItem key={index} value={currency}>
                        {currency}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
            <Controller
              name="amount2"
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  {...field}
                  required
                  label="Сума 2"
                  fullWidth
                  type="number"
                  margin="normal"
                  error={!!errors.amount2}
                  helperText={errors.amount2?.message}
                />
              )}
            />
          </Box>
        </Box>
        <FormControl fullWidth margin="normal">
          <InputLabel>Операція</InputLabel>
          <Controller
            name="operation"
            control={control}
            defaultValue="Купівля"
            render={({ field }) => (
              <Select
                {...field}
                label="Операція"
                required
                error={!!errors.operation}
              >
                {operations.map((operation, index) => (
                  <MenuItem key={index} value={operation}>
                    {operation}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <Controller
            name="totalAmount"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                required
                label="Сума"
                fullWidth
                type="number"
                margin="normal"
                error={!!errors.totalAmount}
                helperText={errors.totalAmount?.message}
              />
            )}
          />
        </FormControl>
        <Controller
          name="rate"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <TextField
              {...field}
              required
              label="Курс"
              fullWidth
              type="number"
              margin="normal"
              error={!!errors.rate}
              helperText={errors.rate?.message}
            />
          )}
        />
        <Controller
          name="clientAmount"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <TextField
              {...field}
              required
              label="Сума від клієнта"
              fullWidth
              type="number"
              margin="normal"
              error={!!errors.clientAmount}
              helperText={errors.clientAmount?.message}
            />
          )}
        />
        <Controller
          name="client"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              required
              label="Клієнт"
              fullWidth
              margin="normal"
              error={!!errors.client}
              helperText={errors.client?.message}
            />
          )}
        />
        <Controller
          name="comment"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              required
              label="Коментар"
              multiline
              minRows={3}
              fullWidth
              margin="normal"
              variant="outlined"
              error={!!errors.client}
              helperText={errors.comment?.message}
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Скасувати</Button>
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Зберегти
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTransactionDialog;
