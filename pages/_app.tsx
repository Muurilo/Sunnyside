import { ChakraProvider } from "@chakra-ui/react";

import Theme from "../style/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
