import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';

const ChatLink = () => {
  return (
    <HStack w="full" spacing={3}>
      <Box w={14} h={12} rounded="lg" bg="gray.100" />
      <VStack flex={1} w="full" alignItems="flex-start" justifyContent="center" spacing={0}>
        <HStack w="full" justifyContent="space-between">
          <Heading size="sm" fontSize={12}>
            Dribbble.com
          </Heading>
          <Text fontSize={12} color="gray.400">
            10:32 pm
          </Text>
        </HStack>
        <Text fontSize={12} color="gray.400">
          10.03.2021
        </Text>
      </VStack>
    </HStack>
  );
};

export default ChatLink;
