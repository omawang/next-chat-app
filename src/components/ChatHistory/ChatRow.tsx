import { VStack, Flex, Heading, Box, Text } from '@chakra-ui/react';

const ChatRow = () => {
  return (
    <Flex
      w="full"
      alignItems="center"
      borderBottomColor="gray.100"
      borderBottomWidth={1}
      px={4}
      py={4}
      _hover={{ cursor: 'pointer', bg: 'gray.50' }}
    >
      <Box rounded="full" bg="gray.100" h={10} w={10} />
      <VStack
        flex={1}
        spacing={0}
        overflow="hidden"
        alignItems="flex-start"
        justifyContent="center"
        ml={3}
      >
        <Heading size="xs">John Shinoda</Heading>
        <Text
          fontSize="sm"
          color="gray.400"
          w="full"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          Hey man, how are you? asdfas adsf asdf
        </Text>
      </VStack>
      <Text fontSize="xs" color="gray.400" ml={3}>
        11:57
      </Text>
    </Flex>
  );
};

export default ChatRow;
