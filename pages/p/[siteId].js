import { useRef } from "react";
import { useRouter } from "next/router";
import Feedback from "../../components/Feedback";
import {
  getAllFeedback,
  getAllSites,
} from "../../lib/db-admin";

import { useAuth } from "../../lib/auth";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { createFeedback } from "../../lib/db";

export async function getStaticProps(context) {
  const siteId = context.params.siteId;

  const feedback = await getAllFeedback(siteId);

  return {
    props: {
      initialFeedback: feedback,
    },
  };
}

export async function getStaticPaths() {
  const sites = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

const Sitefeedback = ({ initialFeedback }) => {
  const auth = useAuth();
  const router = useRouter();

  const inputEl = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      author: auth.user.name,
      authorId: auth.user.uid,
      siteId: router.query.siteId,
      text: inputEl.current.value,
      createdAt: new Date().toISOString(),
      provider: auth.user.provider,
      status: "pending",
    };

    console.log(newFeedback);
    createFeedback(newFeedback);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="full"
      maxWidth="700px"
      margin="0 auto"
    >
      <Box as="form" onSubmit={onSubmit}>
        <FormControl marginY={8}>
          <FormLabel>Comentario</FormLabel>
          <Input
            ref={inputEl}
            type="comment"
            id="comment"
          />
          <Button
            fontWeight="medium"
            type="submit"
            marginTop={2}
          >
            Agregar comentario
          </Button>
        </FormControl>
      </Box>
      {initialFeedback.map((feedback) => {
        return <Feedback key={feedback.id} {...feedback} />;
      })}
    </Box>
  );
};

export default Sitefeedback;
