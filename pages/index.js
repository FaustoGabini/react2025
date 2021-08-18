import Head from "next/head";
import { useAuth } from "../lib/auth";
import {
  Button,
  Flex,
  Code,
  Text,
  Icon,
} from "@chakra-ui/react";
import EmptyState from "../components/EmptyState";
const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justifyContent="center"
      height="100vh"
    >
      <Head>
        <title>Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Icon
        viewBox="0 0 46 32"
        color="black"
        boxSize="64px"
        mb={2}
      >
        <path
          d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
          fill="currentColor"
        />
      </Icon>

      {auth.user ? (
        <>
          <Button
            onClick={(e) => {
              auth.signOut();
            }}
          >
            Sign Out
          </Button>
        </>
      ) : (
        <Button
          size="sm"
          marginTop={4}
          onClick={(e) => {
            auth.signinWithGithub();
          }}
        >
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;
