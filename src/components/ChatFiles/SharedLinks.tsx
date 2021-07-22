import {
  Box,
  Button,
  Heading,
  HStack,
  List,
  ListItem,
} from '@chakra-ui/react';
import ChatLink from './ChatLink';

const SharedLinks = () => {
  return (
    <>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        w="full"
        px={4}
      >
        <Heading size="xs">Shared Links</Heading>
        <Button variant="link" color="blue.400" fontSize="sm">
          see all
        </Button>
      </HStack>
      <Box w="full" mt={2}>
        <List px={4} spacing={4}>
          <ListItem>
            <ChatLink />
          </ListItem>
          <ListItem>
            <ChatLink />
          </ListItem>
          <ListItem>
            <ChatLink />
          </ListItem>
          <ListItem>
            <ChatLink />
          </ListItem>
          <ListItem>
            <ChatLink />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default SharedLinks;
