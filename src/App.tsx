import "./App.scss";

import { WagmiProvider } from "wagmi";

import { wagmiConfig } from "./utils/services/wagmi";

function App() {
  return (
    <section className="App">
      <WagmiProvider config={wagmiConfig}>
        <w3m-button />
      </WagmiProvider>
    </section>
  );
}

export default App;
