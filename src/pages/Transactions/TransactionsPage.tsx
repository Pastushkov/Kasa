import { useEffect, useState } from "react";
import { Transaction } from "../../types";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { transactionSeed } from "../../seeds/transaction";
import AddTransactionDialog from "./AddTransactionDialog";
import { useRootContext } from "../../state/rootContext";

const TransactionsPage = () => {
  const { transactions, setTransactions } = useRootContext();
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false);

  useEffect(() => {
    setTransactions(transactionSeed);
  }, [setTransactions]);

  const handleTogleAddTransaction = () => {
    setIsAddTransactionOpen(!isAddTransactionOpen);
  };

  const handleSaveTransaction = (newTransaction: Transaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box
        sx={{
          marginBottom: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button variant="contained" color="secondary">
          Пошук
        </Button>
        <Button variant="contained" color="secondary">
          Відображення
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleTogleAddTransaction}
        >
          Додати
        </Button>
      </Box>
      <AddTransactionDialog
        open={isAddTransactionOpen}
        onClose={handleTogleAddTransaction}
        onSave={handleSaveTransaction}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Операція</TableCell>
              <TableCell>Валюта 1</TableCell>
              <TableCell>Сума 1</TableCell>
              <TableCell>Валюта 2</TableCell>
              <TableCell>Сума 2</TableCell>
              <TableCell>Курс</TableCell>
              <TableCell>Час</TableCell>
              <TableCell>Клієнт</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{transaction.operation}</TableCell>
                <TableCell>{transaction.currency1}</TableCell>
                <TableCell>{transaction.amount1}</TableCell>
                <TableCell>{transaction.currency2}</TableCell>
                <TableCell>{transaction.amount2}</TableCell>
                <TableCell>{transaction.rate}</TableCell>
                <TableCell>{transaction.time}</TableCell>
                <TableCell>{transaction.client}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TransactionsPage;
