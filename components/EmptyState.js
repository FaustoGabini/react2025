import React from "react";
import {
  Heading,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";

import DashboardSheel from "./DashboardShell";
import AddSiteModal from "./AddSiteModal";
const EmptyState = () => (
  <DashboardSheel>
    <Flex>
      <Flex justifyContent="space-between" width="100%">
        <Heading marginBottom={4}>Sites</Heading>
        <Button>Agregar Sitio</Button>
      </Flex>
    </Flex>
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
      <AddSiteModal />
    </Flex>
  </DashboardSheel>
);

export default EmptyState;
