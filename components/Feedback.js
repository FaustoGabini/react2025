import {
  Box,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
const Feedback = ({ author, text, createdAt }) => {
  return (
    <Box>
      <Heading size="sm" as="h3" mb={0} fontWeight="medium">
        {author}
      </Heading>
      <Text color="gray.500" mb={4} fontSize="xs">
        {format(parseISO(createdAt), "PPpp")}
      </Text>
      <Text color="gray.800">{text}</Text>
      <Divider borderColor="gray.200" mt={6} mb={6} />
    </Box>
  );
};

export default Feedback;
