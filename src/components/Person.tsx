import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  HStack,
  Text,
} from "@gluestack-ui/themed";
import { PersonType } from "../models/PersonType";

type Props = {
  data: PersonType;
};

export function Person({ data }: Props) {
  return (
    <HStack
      height="$12"
      w="$full"
      justifyContent="space-between"
      alignItems="center"
    >
      <HStack alignItems="center" gap="$2">
        <Avatar bgColor="$secondary700" size="md">
          <AvatarFallbackText>{data.name}</AvatarFallbackText>
        </Avatar>
        <Text size="md" color="$white">
          {data.name}
        </Text>
      </HStack>
      <Checkbox mr="$2" size="md" value={data.id} aria-label={data.name}>
        <CheckboxIndicator mr="$2">
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
      </Checkbox>
    </HStack>
  );
}
