import { Box, HStack, Text, VStack } from '@chakra-ui/react';

const ChatFile = () => {
  return (
    <HStack w="full">
      <Box w={14} h={12} rounded="lg" bg="gray.100" />
      <VStack
        flex={1}
        spacing={0}
        alignItems="flex-start"
        justifyContent="center"
        overflow="hidden"
        ml={3}
      >
        <Text
          w="full"
          fontSize="sm"
          fontWeight="semibold"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          PhotoDanver.jpg
        </Text>
        <HStack w="full" alignItems="center" justifyContent="space-between">
          <Text fontSize="xs" color="gray.400">
            10.03.2021 at 11:43
          </Text>
          <Text fontSize="xs" color="gray.400">
            175 Kb
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default ChatFile;
