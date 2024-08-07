import {
  Avatar,
  AvatarBadge,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  useTheme,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsChatLeftDots, BsGlobe } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import { LuBell } from 'react-icons/lu';
import EpBox from '~/ep-web-components/EpComponents/EpBox/EpBox';
import EpFlex from '~/ep-web-components/EpComponents/EpFlex/EpFlex';
import EpCustomMenu, {
  ImageItem,
  MenuItemType,
} from '~/ep-web-components/EpComponents/EpMenu/EpMenu';
import EpStack from '~/ep-web-components/EpComponents/EpStack/EpStack';
import EpTypography from '~/ep-web-components/EpComponents/EpTypography/EpTypography';

import {
  NotificationMenuList,
  supportedLanguagesList,
  userDetailsItems,
} from '~/utils/XMLConstants';

type HeaderProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Header: FC<HeaderProps> = ({ open, setOpen }) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const theme = useTheme();
  const neutral500Color = theme.colors.neutral[500];
  //   const { handleLogout } = useAuthentication();
  //   const { userInfo } = useHUser();
  const userInfo = {
    firstName: 'Hanan',
    lastName: 'Waqar',
    image: '',
    type: 'client',
  };
  const handleItemClick = (item: MenuItemType) => {
    if (item.label === 'Sign Out') {
      //   handleLogout();
    }
  };
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
  };

  const menu = (
    <div className='shadow-md'>
      <Calendar onChange={handleSelectDate as any} value={selectedDate} />
    </div>
  );
  const handleLanguageItemClick = (value: MenuItemType) => {
    setSelectedLang(value as ImageItem);
  };
  const [selectedLang, setSelectedLang] = useState<ImageItem>({
    label: 'Languages',
    icon: <BsGlobe size={'20px'} />,
    type: 'image',
  });

  const userColor = useColorModeValue('neutral.500', '');
  return (
    <EpFlex
      h='65px'
      shadow={'sm'}
      bg={useColorModeValue('#FFFF', '')}
      justifyContent={'space-between'}
      alignItems={'center'}
      p={3}
      position='sticky'
      top={0}
      zIndex={1}
    >
      <EpBox>
        <IconButton
          onClick={() => {
            setOpen(!open);
          }}
          variant='ghost'
          colorScheme='neutral'
          aria-label='toggle header'
          icon={<GiHamburgerMenu />}
        />
      </EpBox>

      <EpFlex gap={2}>
        <EpCustomMenu
          isIconButton
          buttonProps={{
            variant: 'ghost',
          }}
          items={supportedLanguagesList}
          onItemClick={handleLanguageItemClick}
          icon={<AiOutlineSearch color={neutral500Color} size='20px' />}
        />
        <EpCustomMenu
          isIconButton
          buttonProps={{
            variant: 'ghost',
          }}
          items={supportedLanguagesList}
          onItemClick={handleLanguageItemClick}
          icon={<LuBell color={neutral500Color} size='20px' />}
        />
        <EpCustomMenu
          isIconButton
          buttonProps={{
            variant: 'ghost',
          }}
          items={NotificationMenuList}
          onItemClick={handleLanguageItemClick}
          icon={<BsChatLeftDots color={neutral500Color} size='20px' />}
        />
        <EpCustomMenu
          isIconButton
          buttonProps={{
            variant: 'ghost',
          }}
          items={supportedLanguagesList}
          onItemClick={handleLanguageItemClick}
          icon={selectedLang.icon}
        />
        <EpCustomMenu
          isIconButton
          buttonProps={{
            variant: 'ghost',
          }}
          items={userDetailsItems}
          onItemClick={handleItemClick}
          icon={
            isMobile ? (
              <Avatar
                size={'sm'}
                name={userInfo?.firstName}
                src={userInfo?.image}
              >
                <AvatarBadge boxSize='1.25em' bg='green.500' />
              </Avatar>
            ) : (
              <EpFlex px={2} gap={2} alignItems={'center'}>
                <Avatar
                  size={'sm'}
                  name={userInfo?.firstName}
                  src={userInfo?.image}
                >
                  <AvatarBadge boxSize='1.25em' bg='green.500' />
                </Avatar>
                <EpStack gap={0} textAlign={'start'}>
                  <EpTypography fontWeight={500} fontSize={'14px'}>
                    {userInfo?.firstName} {userInfo?.lastName}
                  </EpTypography>
                  <EpTypography
                    color={userColor}
                    fontWeight={500}
                    fontSize={'sm'}
                  >
                    {userInfo?.type}
                  </EpTypography>
                </EpStack>

                <FaChevronDown color={neutral500Color} />
              </EpFlex>
            )
          }
        />
      </EpFlex>
    </EpFlex>
  );
};
export default Header;
