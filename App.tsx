import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import Home from "./src/screen/Home";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </GluestackUIProvider>
  );
}
