import {
  Show,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FC, ReactNode, useEffect } from 'react';
import EpBox from '~/ep-web-components/EpComponents/EpBox/EpBox';
import EpFlex from '~/ep-web-components/EpComponents/EpFlex/EpFlex';

import EpSideBar from '../SideBar/EpSideBar';

interface IDashboard {
  children: ReactNode;
}

const Dashboard: FC<IDashboard> = ({ children }) => {
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure();
  const isTablet = useBreakpointValue({ base: false, lg: true });

  useEffect(() => {
    if (!isTablet) {
      onClose();
    } else {
      onOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTablet]);

  return (
    <EpFlex>
      <Show above='xl'>
        <EpFlex
          flexDir={'column'}
          px={!isOpen ? 6 : 2}
          py={!isOpen ? 4 : 4}
          width={!isOpen ? '15%' : '4%'}
          height={'100vh'}
          bg={useColorModeValue('#FFFF', '')}
          transition='width 0.3s ease'
          overflow='scroll'
          position='sticky'
          top={0}
          bottom={0}
        >
          <EpSideBar isOpen={isOpen} />
        </EpFlex>
      </Show>
      <EpBox flex='1' width='80%'>
        {/* <Header open={isOpen} setOpen={onToggle} /> */}
        <EpBox p={{ base: '5px 5px 0px 5px', lg: '20px 20px 0px 20px' }}>
          {children}
        </EpBox>
      </EpBox>
    </EpFlex>
  );
};

export default Dashboard;
