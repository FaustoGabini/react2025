import React from "react";
import { mutate } from "swr";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { createSite } from "../lib/db";
import { useAuth } from "../lib/auth";
const AddSiteModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();

  const toast = useToast();
  const auth = useAuth();
  const { handleSubmit, register } = useForm();
  const onCreateSite = ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
    };
    createSite(newSite);
    toast({
      title: "Exitoso!",
      description: "Su sitio se ha agregado correctamente",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Update the SWR cache to add the new site
    mutate(
      "/api/sites",
      async (data) => {
        console.log(data);
        return { sites: [...data.sites, newSite] };
      },
      false
    );
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: "gray.700" }}
        _active={{
          bg: "gray.800",
          transform: "scale(0.95)",
        }}
      >
        {children}
      </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          as="form"
          onSubmit={handleSubmit(onCreateSite)}
        >
          <ModalHeader fontWeight="bold">
            Agregar sitio
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                placeholder="Mi pagina web"
                id="name"
                {...register("name", { required: true })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                id="link-input"
                placeholder="http://miwebsite.com"
                {...register("url", { required: true })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={onClose}
              mr={3}
              fontWeight="medium"
            >
              Cancelar
            </Button>
            <Button
              backgroundColor="#99FFFE"
              color="#194D4C"
              fontWeight="medium"
              type="submit"
            >
              Crear
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
