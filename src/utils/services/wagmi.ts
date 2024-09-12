import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { http } from "wagmi";

import { socotra } from "../../config/JunesChains";

const projectId = "xxxx";

const metadata = {
  name: "example",
  description: "example",
  url: "https://example.com",
  icons: ["logo.png"],
};

const chains = [socotra] as const;
export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true,
  auth: {
    email: false,
    socials: [], // if we want to enable socials, we can add them here
    showWallets: true,
    walletFeatures: true,
  },
  enableCoinbase: true,
  transports: {
    [socotra.id]: http(),
  },
});

createWeb3Modal({
  wagmiConfig: wagmiConfig,
  projectId,
  enableAnalytics: true,
  themeVariables: {
    "--w3m-z-index": 120,
  },
  chainImages: {
    [socotra.id]: "logo.png",
  },
});
