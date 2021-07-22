import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { IoMdSend, IoMdDocument } from 'react-icons/io';
import { HiChat } from 'react-icons/hi';

import ChatBubble from './ChatBubble';

const messages = [
  {
    message: 'Hey Travis! Would you like to go out for a coffee?',
    from: 'others',
    dateSent: '20:21',
  },
  {
    message: 'Sure! At 11:00 am?',
    from: 'me',
    dateSent: '20:22',
  },
  {
    message: "That's too early! How about at noon?",
    from: 'others',
    dateSent: '20:22',
  },
  {
    message: 'That sounds good as well. Where should we meet?',
    from: 'me',
    dateSent: '20:23',
  },
  {
    message: 'Meet me at the hardware store on 21 Duck Street.',
    from: 'others',
    dateSent: '20:23',
  },
  {
    message: "Sounds good. I'll bring my friend with me as well!",
    from: 'me',
    dateSent: '20:24',
  },
  {
    message: 'Which one? The developer or the designer?',
    from: 'others',
    dateSent: '20:24',
  },
  {
    message: 'The developer. You remember Tony, right?',
    from: 'me',
    dateSent: '20:24',
  },
  {
    message: "Yeah! Tony's a great guy!",
    from: 'others',
    dateSent: '20:25',
  },
  {
    message: 'Indeed he is! Alright, see you later 👋!',
    from: 'me',
    dateSent: '20:25',
  },
];

type Props = {
  onOpenChatHistory: () => void;
  onOpenChatFiles: () => void;
};

const Chat = ({ onOpenChatHistory, onOpenChatFiles }: Props) => {
  return (
    <Flex flexDirection="column" w="full" py={4}>
      <HStack px={4}>
        <IconButton
          variant="ghost"
          color="gray.500"
          icon={<HiChat />}
          onClick={onOpenChatHistory}
          aria-label="Open Chat History Drawer"
          display={{ base: 'inherit', lg: 'none' }}
        />
        <Input rounded="full" placeholder="Search friends" />
        <IconButton
          variant="ghost"
          color="gray.500"
          icon={<IoMdDocument />}
          onClick={onOpenChatFiles}
          aria-label="Open Chat Files Drawer"
          display={{ base: 'inherit', lg: 'none' }}
        />
      </HStack>

      <VStack alignItems="start" spacing={0} mt={4} px={4}>
        <Text fontSize="xs" color="gray.400">
          Chat with
        </Text>
        <Heading size="sm">Dina Harrison</Heading>
      </VStack>

      <Flex
        flex={1}
        flexDirection="column"
        w="full"
        overflowY="auto"
        mt={4}
        px={4}
      >
        {messages.map(({ message, from, dateSent }) => (
          <ChatBubble
            message={message}
            from={from as any}
            dateSent={dateSent}
          />
        ))}
      </Flex>
      <HStack w="full" px={4}>
        <Input placeholder="Type your message" />
        <IconButton colorScheme="blue" icon={<IoMdSend />} aria-label="Send" />
      </HStack>
    </Flex>
  );
};

export default Chat;
