import {
  Box,
  Link,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

import { Table, Tr, Th, Td } from "./Table";

const SiteTable = ({ sites }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Nombre</Th>
          <Th>Enlace</Th>
          <Th>Feedback Link</Th>
          <Th>Fecha</Th>
          <Th>{""}</Th>
        </Tr>
      </thead>
      <tbody>
        {sites.map((site) => {
          return (
            <Box as="tr" key={site.url}>
              <Td fontWeight="medium">{site.name}</Td>
              <Td>{site.url}</Td>
              <Td>
                <Link>Ver Feedback</Link>
              </Td>
              <Td>
                {format(parseISO(site.createdAt), "PPpp")}
              </Td>
            </Box>
          );
        })}
      </tbody>
    </Table>
  );
};

export default SiteTable;
