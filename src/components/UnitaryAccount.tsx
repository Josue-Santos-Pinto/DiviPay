import { VStack, Text, Input, InputField } from "@gluestack-ui/themed";
import React from "react";

type Props = {
  value: number;
};

export default function UnitaryAccount({ value }: Props) {
  const formatValue = () => {
    let fValue = value.toFixed(2);
    return fValue.toString().replace(".", ",");
  };

  return (
    <VStack
      w="$5/6"
      minHeight="$32"
      bg="$secondary800"
      mb="$10"
      px="$8"
      mx="$8"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      bottom={10}
      left={0}
      right={0}
      borderRadius="$md"
    >
      <Text size="sm" mb="$2" color="$secondary300">
        Valor unitário
      </Text>

      <Text size="4xl" color="$white" textAlign="center" fontWeight="$bold">
        R${formatValue()}
      </Text>
    </VStack>
  );
}
