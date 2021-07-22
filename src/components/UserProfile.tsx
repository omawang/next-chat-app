import {
  VStack,
  Flex,
  Avatar,
  AvatarBadge,
  Heading,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { RiDribbbleLine, RiInstagramLine, RiTwitterLine } from 'react-icons/ri';

type Props = {
  name: string;
};
const UserProfile = ({ name }: Props) => {
  return (
    <Flex w="full" flexDirection="column" alignItems="center">
      <Avatar name={name} size="xl">
        <AvatarBadge bg="green.400" boxSize={6} borderWidth={4} />
      </Avatar>
      <VStack>
        <Heading size="md" mt={3}>
          {name}
        </Heading>
        <HStack spacing={2}>
          <IconButton
            variant="ghost"
            color="gray.400"
            icon={<RiDribbbleLine />}
            aria-label="Dribble"
          />
          <IconButton
            variant="ghost"
            color="gray.400"
            icon={<RiInstagramLine />}
            aria-label="Instagram"
          />
          <IconButton
            variant="ghost"
            color="gray.400"
            icon={<RiTwitterLine />}
            aria-label="Twitter"
          />
        </HStack>
      </VStack>
    </Flex>
  );
};

export default UserProfile;
