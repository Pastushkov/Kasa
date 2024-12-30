import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "50px",
        bgcolor: "blueviolet",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
      }}
    >
      <Button
        variant="text"
        color="primary"
        sx={{ color: "white" }}
        onClick={() => navigate("/")}
      >
        Close
      </Button>
      <div>Exchange</div>
      <MoreHorizIcon />
    </Box>
  );
};

export default Header;
