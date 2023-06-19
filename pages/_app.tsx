import type { AppProps } from "next/app";
import "../styles/globals.css";
import {Sepolia} from '@thirdweb-dev/chains'

import {
  ThirdwebProvider,
} from "@thirdweb-dev/react";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = Sepolia.chain;

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ThirdwebProvider activeChain={'polygon'} 
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;