import { login } from "../../services/login";
import { Button, Center } from "@chakra-ui/react";

export const ButtonComponent = () => {
    return (
        <Center>
            <Button colorScheme="teal" onClick={login} marginTop="2rem" width="100%" height="3rem">
                Button
            </Button>
        </Center>
    );
};
