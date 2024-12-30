import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RestoreIcon from "@mui/icons-material/Restore";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PeopleIcon from "@mui/icons-material/People";

const BottomNavigationMenu = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/transactions");
        break;
      case 1:
        navigate("/currency");
        break;
      case 2:
        navigate("/cash");
        break;
      case 3:
        navigate("/clients");
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        borderTop: "1px solid #ccc",
      }}
    >
      <BottomNavigationAction label="Транзакції" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Валюта" icon={<MonetizationOnIcon />} />
      <BottomNavigationAction label="Каса" icon={<AccountBalanceIcon />} />
      <BottomNavigationAction label="Клієнти" icon={<PeopleIcon />} />
    </BottomNavigation>
  );
};

export default BottomNavigationMenu;
