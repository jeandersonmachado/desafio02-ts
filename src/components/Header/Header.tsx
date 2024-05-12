import { ChakraProvider, Box, Center } from "@chakra-ui/react";

export const Header = () => {
    return (
        <ChakraProvider>
            <Box pos="absolute" w="100%">
                <Center>
                    <p style={{ fontSize: "2rem", color: "white" }}>Dio Bank</p>
                </Center>
            </Box>
        </ChakraProvider>
    );
};
