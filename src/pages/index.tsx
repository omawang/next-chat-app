import { HStack, Flex, useDisclosure } from '@chakra-ui/react';

import Chat from '../components/Chat';
import ChatFilesDrawer from '../components/ChatFiles/ChatFilesDrawer';
import ChatFilesSidebar from '../components/ChatFiles/ChatFilesSidebar';
import ChatHistoryDrawer from '../components/ChatHistory/ChatHistoryDrawer';
import ChatHistorySidebar from '../components/ChatHistory/ChatHistorySidebar';
import Navigation from '../components/Navigation';

const IndexPage = () => {
  const {
    isOpen: isOpenChatHistory,
    onOpen: onOpenChatHistory,
    onClose: onCloseChatHistory,
  } = useDisclosure();
  const {
    isOpen: isOpenChatFiles,
    onOpen: onOpenChatFiles,
    onClose: onCloseChatFiles,
  } = useDisclosure();

  return (
    <HStack h="100vh" spacing={0}>
      <Flex as="nav" h="full" w="full" maxW={16} bg="gray.100">
        <Navigation />
      </Flex>
      <Flex
        as="aside"
        h="full"
        w="full"
        maxW="xs"
        display={{ base: 'none', lg: 'flex' }}
        borderRightColor="gray.100"
        borderRightWidth={1}
      >
        <ChatHistorySidebar />
      </Flex>
      <Flex
        as="main"
        h="full"
        flex={1}
        borderRightColor="gray.100"
        borderRightWidth={1}
      >
        <Chat onOpenChatHistory={onOpenChatHistory} onOpenChatFiles={onOpenChatFiles} />
      </Flex>
      <Flex
        as="aside"
        h="full"
        w="full"
        maxW="xs"
        display={{ base: 'none', lg: 'flex' }}
      >
        <ChatFilesSidebar />
      </Flex>

      <ChatHistoryDrawer
        isOpen={isOpenChatHistory}
        onClose={onCloseChatHistory}
      />
      <ChatFilesDrawer
        isOpen={isOpenChatFiles}
        onClose={onCloseChatFiles}
      />
    </HStack>
  );
};

export default IndexPage;
