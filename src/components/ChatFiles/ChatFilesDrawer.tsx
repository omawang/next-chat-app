import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

import ChatFilesSidebar from './ChatFilesSidebar';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ChatFilesDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <ChatFilesSidebar />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default ChatFilesDrawer;
