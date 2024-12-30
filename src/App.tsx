import { Box } from "@mui/material";
import HomePage from "./pages/Home/HomePage";
import BottomNavigationMenu from "./components/BottomNavigation/BottomNavigationMenu";
import { BrowserRouter, Route, Routes } from "react-router";

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
        </Routes>
      </Box>
      <BottomNavigationMenu />
    </BrowserRouter>
  );
}

export default App;
