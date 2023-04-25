import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import "../styles/globals.css";
import Header from "../components/Header/Header";
// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;
//  parseInt(`${process.env.NEXT_PUBLIC_CHAIN_ID}`)
const Title = "NFT marketplace";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <ChakraProvider>
        <Head>
          <title>{Title}</title>
        </Head>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
