import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';

type Props = {
  message: string;
  from: 'me' | 'others';
  dateSent: string;
};

const ChatBubble = ({ message, from, dateSent }: Props) => {
  const isMe = from === 'me';
  const allignment = isMe ? 'flex-end' : 'flex-start';
  const bottomLeftRadius = isMe ? 32 : 0;
  const bottomRightRadius = isMe ? 0 : 32;

  return (
    <VStack w="full" alignItems={allignment} mb={4}>
      <Box
        bg={isMe ? 'blue.50' : 'gray.100'}
        px={6}
        py={4}
        maxW={80}
        borderTopRadius={32}
        borderBottomLeftRadius={bottomLeftRadius}
        borderBottomRightRadius={bottomRightRadius}
      >
        {message}
      </Box>
      <Text fontSize="sm" color="gray.400">{dateSent}</Text>
    </VStack>
  );
};

export default ChatBubble;
