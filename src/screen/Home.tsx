import React from "react";
import { VStack, Text } from "@gluestack-ui/themed";
import { Person } from "../components/Person";
import AccountTotal from "../components/AccountTotal";

export default function Home() {
  return (
    <VStack bg="$black" flex={1}>
      <AccountTotal />
      <Person data={{ id: "1", name: "Josué" }} />
    </VStack>
  );
}
