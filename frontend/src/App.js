import { Box } from "@chakra-ui/react";
import Allroutes from "./routes/Allroutes";
function App() {
  return (
    <Box
      className="App"
      display="flex"
      m="auto"
      w="100%"
      style={{
        background:
          "url('https://b24-e5s7pr.bitrix24.in/bitrix/templates/bitrix24/themes/light/milky-way/milky-way.jpg')",
      }}
    >
      <Allroutes/>
    </Box>
  );
}

export default App;
