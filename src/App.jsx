import "./App.css";
import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { SelectMuscleParts } from "./components/SelectMuscleParts/SelectMuscleParts";

export default function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <p>動作確認中</p>
        <Button border="2px">ボタン</Button>
        <br />
        <SelectMuscleParts />
      </ChakraProvider>
    </>
  );
}
