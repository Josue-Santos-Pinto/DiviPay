import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  HStack,
  Text,
} from "@gluestack-ui/themed";

type Props = {
  data: {
    id: string;
    name: string;
  };
};

export function Person({ data }: Props) {
  return (
    <HStack>
      <HStack>
        <Avatar>
          <AvatarFallbackText>{data.name}</AvatarFallbackText>
          <AvatarImage
            source={{ uri: "https://github.com/josue-santos-pinto.png" }}
            alt="foto de perfil"
          />
        </Avatar>
        <Text>{data.name}</Text>
      </HStack>
    </HStack>
  );
}
