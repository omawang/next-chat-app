import { Box, Divider, Flex, VStack } from '@chakra-ui/react';

import UserProfile from '../UserProfile';
import SharedFiles from './SharedFiles';
import SharedLinks from './SharedLinks';

const ChatFilesSidebar = () => {
  return (
    <VStack h="full" w="full" spacing={4} pt={4}>
      <UserProfile name="Dina Harrison" />
      <Box w="full" px={4}>
        <Divider color="gray.100" />
      </Box>
      <Flex flexDirection="column" flex={1} w="full" overflowY="auto">
        <SharedFiles />
        <Box w="full" px={4} py={4}>
          <Divider color="gray.100" />
        </Box>
        <SharedLinks />
      </Flex>
    </VStack>
  );
};

export default ChatFilesSidebar;
