import "@fontsource/barlow/600.css"
import "@fontsource/fraunces/700.css"
import "@fontsource/fraunces/900.css"
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
