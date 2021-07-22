import {
  Box,
  Button,
  Heading,
  HStack,
  List,
  ListItem,
} from '@chakra-ui/react';
import ChatFile from './ChatFile';

const SharedFiles = () => {
  return (
    <>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        w="full"
        px={4}
      >
        <Heading size="xs">Shared Files</Heading>
        <Button variant="link" color="blue.400" fontSize="sm">
          see all
        </Button>
      </HStack>
      <Box w="full" mt={2}>
        <List spacing={4} px={4}>
          <ListItem>
            <ChatFile />
          </ListItem>
          <ListItem>
            <ChatFile />
          </ListItem>
          <ListItem>
            <ChatFile />
          </ListItem>
          <ListItem>
            <ChatFile />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default SharedFiles;
