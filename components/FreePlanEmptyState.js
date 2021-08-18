import React from "react";
import {
  Heading,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import DashboardSheel from "./DashboardShell";
const FreePlanEmptyState = () => (
  <DashboardSheel>
    <Box
      width="100%"
      backgroundColor="white"
      borderRadius="8px"
      p={8}
    >
      <Heading size="md">
        Obtene feedback en tu sitio instantáneamente
      </Heading>
      <Text>Comienza hoy, luego crece con nosotros 🌱</Text>
      <Button variant="solid" size="md">
        Actualiza para comenzar
      </Button>
    </Box>
  </DashboardSheel>
);

export default FreePlanEmptyState;
