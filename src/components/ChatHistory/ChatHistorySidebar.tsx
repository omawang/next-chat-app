import {
  VStack,
  Heading,
  Box,
  Divider,
  Input,
  List,
  ListItem,
} from '@chakra-ui/react';
import ChatRow from './ChatRow';
import FriendsOnline from './FriendsOnline';

import UserProfile from '../UserProfile';

const onlineFriends = [
  'Lazar Nikolov',
  'Mark Chandler',
  'Segun Adebayo',
  'Tim Kolberger',
  'Folasade Agbaje',
  'Alex Gerrit',
  'Jason Hughes',
  'Jonathan Bakebwa',
  'Tioluwani Kolawole',
];

const ChatHistorySidebar = () => {
  return (
    <VStack h="full" w="full" alignItems="center" spacing={4} pt={4}>
      <UserProfile name="Travis Taylor" />

      <Box w="full" px={4}>
        <Divider color="gray.100" />
      </Box>

      <FriendsOnline friends={onlineFriends} />

      <Box w="full" px={4}>
        <Divider color="gray.100" />
      </Box>

      <Box w="full" px={4}>
        <Heading size="xs">Chats</Heading>
        <Input placeholder="Search chat" rounded="full" mt={2} />
      </Box>

      <Box w="full" overflowY="auto">
        <List>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
          <ListItem>
            <ChatRow />
          </ListItem>
        </List>
      </Box>
    </VStack>
  );
};

export default ChatHistorySidebar;
