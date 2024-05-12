import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header/Header";
import { Card } from "./components/Card/Card";
function App() {
    return (
        <ChakraProvider>
            <Header></Header>
            <Card></Card>
        </ChakraProvider>
    );
}

export default App;
