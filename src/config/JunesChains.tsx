import { defineChain } from "viem";
export const socotra = defineChain({
  id: 101003,
  chainId: 101003,
  name: "Socotra Testnet",
  network: "Socotra Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Socotra Testnet",
    symbol: "JUNE",
  },
  rpcUrls: {
    public: { http: ["https://api.socotra-testnet.network/ext/bc/JUNE/rpc"] },
    default: {
      http: ["https://api.socotra-testnet.network/ext/bc/JUNE/rpc"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "juneoscan",
      url: "https://socotra.juneoscan.io/chain/2",
    },
    default: {
      name: "juneoscan",
      url: "https://socotra.juneoscan.io/chain/2",
    },
  },
  testnet: true,

});
