import { Box } from "@mui/material";
import aaaa from "./aaaa.JPG";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${aaaa})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Header />
      <Counter />
    </Box>
  );
}

export default App;
