import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import ChatHistorySidebar from './ChatHistorySidebar';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ChatHistoryDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <ChatHistorySidebar />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default ChatHistoryDrawer;
