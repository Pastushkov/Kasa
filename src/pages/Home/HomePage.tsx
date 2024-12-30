import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role: string) => {
    console.log(`Selected role: ${role}`);
    navigate("/transactions");
  };

  return (
    <Box
      sx={{
        height: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Виберіть роль
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleRoleSelect("Касир")}
        sx={{ width: "200px" }}
      >
        Касир
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleRoleSelect("Адмін")}
        sx={{ width: "200px" }}
      >
        Адмін
      </Button>
    </Box>
  );
};

export default HomePage;
