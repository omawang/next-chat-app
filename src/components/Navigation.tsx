import { VStack, Tooltip, IconButton } from '@chakra-ui/react';
import { MdDashboard, MdMail, MdSettings } from 'react-icons/md';
import { HiLightningBolt, HiBell, HiTag, HiSearch } from 'react-icons/hi';

import ChakraLogo from './ChakraLogo';

const Navigation = () => {
  return (
    <VStack w="full" alignItems="center" justifyContent="space-between" py={4}>
      <VStack>
        <ChakraLogo mb={4} />
        <Tooltip label="Dashboard" placement="right">
          <IconButton
            icon={<MdDashboard />}
            color="gray.500"
            aria-label="Dashboard"
          />
        </Tooltip>
        <Tooltip label="Actions" placement="right">
          <IconButton
            icon={<HiLightningBolt />}
            color="gray.500"
            aria-label="Actions"
          />
        </Tooltip>
        <Tooltip label="Search" placement="right">
          <IconButton
            icon={<HiSearch />}
            color="gray.500"
            aria-label="Search"
          />
        </Tooltip>
        <Tooltip label="Notifications" placement="right">
          <IconButton
            icon={<HiBell />}
            color="gray.500"
            aria-label="Notifications"
          />
        </Tooltip>
        <Tooltip label="Tags" placement="right">
          <IconButton icon={<HiTag />} color="gray.500" aria-label="Tags" />
        </Tooltip>
        <Tooltip label="Messages" placement="right">
          <IconButton
            icon={<MdMail />}
            color="gray.500"
            aria-label="Messages"
          />
        </Tooltip>
      </VStack>

      <Tooltip label="Settings" placement="right">
        <IconButton icon={<MdSettings />} color="gray.500" aria-label="Settings" />
      </Tooltip>
    </VStack>
  );
};

export default Navigation;
