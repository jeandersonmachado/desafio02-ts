import { Flex, Box, Center, Input } from "@chakra-ui/react";
import { ButtonComponent } from "../Button/Button";

export const Card = () => {
    return (
        <Flex minHeight="100vh" backgroundColor="#9413dc" align="center" justify="center">
            <Box backgroundColor="#FFFFFF" borderRadius="20px" padding="2rem">
                <Center marginBottom="2rem">
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="email" marginBottom="2rem" height="3rem" />
                <Input type="password" placeholder="password" height="3rem" />
                <ButtonComponent></ButtonComponent>
            </Box>
        </Flex>
    );
};
