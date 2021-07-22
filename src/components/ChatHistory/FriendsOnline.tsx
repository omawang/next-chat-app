import {
  VStack,
  Flex,
  Avatar,
  AvatarBadge,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';

type Props = {
  friends: string[];
};

const FriendsOnline = ({ friends }: Props) => {
  return (
    <Flex flexDirection="column" w="full">
      <HStack alignItems="center" justifyContent="space-between" px={4}>
        <Heading size="xs">Friends Online</Heading>
        <Text fontSize="sm" color="gray.500">
          {friends.length}
        </Text>
      </HStack>
      <HStack w="full" overflow="auto" minH={24} spacing={3} px={4}>
        {friends.map((name) => (
          <Avatar name={name} key={name}>
            <AvatarBadge bg="green.400" boxSize={4} borderWidth={2} />
          </Avatar>
        ))}
      </HStack>
    </Flex>
  );
};

export default FriendsOnline;
