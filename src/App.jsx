import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { SelectMuscleParts } from "./components/SelectMuscleParts/SelectMuscleParts";
import { SimpleDatePicker } from "./components/Calendar/Calendar";
import { Header } from "./components/Header/Header";
import { NumberOfTimes } from "./components/NumberOfTimes/NumberOfTimes";

export default function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        {/* <p>動作確認中</p>
        <Button border="2px">ボタン</Button>
        <br /> */}
        <Box mx="15%">
          <SelectMuscleParts />
          <SimpleDatePicker />
          <NumberOfTimes />
        </Box>
      </ChakraProvider>
    </>
  );
}
