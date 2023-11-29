import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import Home from "./src/screen/Home";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Home />
    </GluestackUIProvider>
  );
}
