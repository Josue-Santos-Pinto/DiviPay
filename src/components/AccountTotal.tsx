import { VStack, Text, Input, InputField } from "@gluestack-ui/themed";
import React, { useState } from "react";

type Props = {
  setTotalValue: Function;
};

export default function AccountTotal({ setTotalValue }: Props) {
  const formatTotalValue = (e: string) => {
    if (e.includes(",")) {
      setTotalValue(parseFloat(e.replace(",", ".")));
    } else {
      setTotalValue(parseFloat(e));
    }
  };

  return (
    <VStack
      w="$full"
      bg="$secondary800"
      pt="$16"
      pb="$10"
      px="$8"
      alignItems="center"
      justifyContent="center"
    >
      <Text size="sm" mb="$2" color="$secondary300">
        Valor total
      </Text>

      <Input
        variant="outline"
        h="$16"
        borderWidth="$0"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="$white" size="4xl">
          R$
        </Text>
        <InputField
          placeholder="0,00"
          fontSize="$6xl"
          color="$white"
          textAlign="center"
          fontWeight="$bold"
          keyboardType="decimal-pad"
          onChangeText={(e) => formatTotalValue(e)}
          maxLength={8}
          px="$2"
        />
      </Input>
    </VStack>
  );
}
