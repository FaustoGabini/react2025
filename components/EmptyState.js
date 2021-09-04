import React from "react";
import {
  Heading,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";

import AddSiteModal from "./AddSiteModal";
const EmptyState = () => (
  <Flex
    direction="column"
    justifyContent="center"
    alignItems="center"
    width="100%"
    backgroundColor="white"
    borderRadius="8px"
    p={16}
  >
    <Heading size="lg" marginBottom={2}>
      Todavia no tienes ningun sitio.
    </Heading>
    <Text marginBottom={4}>Bienvenido 👋 empecemos.</Text>
    <AddSiteModal>Agregue su primer sitio</AddSiteModal>
  </Flex>
);

export default EmptyState;
