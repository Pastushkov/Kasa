import { Box } from "@mui/material";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import TransactionsPage from "./pages/Transactions/TransactionsPage";
import CashPage from "./pages/Cash/CashPage";
import ClientPage from "./pages/Client/ClientPage";
import CurrencyPage from "./pages/Currency/CurrencyPage";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          paddingBottom: "56px",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<Layout />}>
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/cash" element={<CashPage />} />
            <Route path="/clients" element={<ClientPage />} />
            <Route path="/currency" element={<CurrencyPage />} />
          </Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
