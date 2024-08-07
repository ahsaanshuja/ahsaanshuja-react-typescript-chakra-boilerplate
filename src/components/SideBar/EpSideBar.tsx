import { IconButton } from '@chakra-ui/react';
// import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import EpBox from '~/ep-web-components/EpComponents/EpBox/EpBox';
import EpButton from '~/ep-web-components/EpComponents/EpButton/EpButton';
import EPDivider from '~/ep-web-components/EpComponents/EpDivider/EpDivider';
import EpFlex from '~/ep-web-components/EpComponents/EpFlex/EpFlex';
import { EpLogo } from '~/ep-web-components/EpComponents/EpLogo/EpLogo';
import EpStack from '~/ep-web-components/EpComponents/EpStack/EpStack';
import EpTooltip from '~/ep-web-components/EpComponents/EpTooltip/EpTooltip';
import EpTypography from '~/ep-web-components/EpComponents/EpTypography/EpTypography';

import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '~/global/common/redux/store';
import { ProfileStatus } from '~/gql/graphql';
import {
  EpClientDashboardSideMenu,
  EpContractorDashboardSideMenu,
  SideBarMenuItem,
  bottomAppMenu,
} from './Constants/Constants';

const EpSideBar: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const router = useLocation();
  const navigate = useNavigate();
  const [requestName, setRequestName] = useState<string | null>(null);
  // const { userInfo } = useHUser();
  const userInfo = {
    type: 'contractor',
    isProfileCompleted: ProfileStatus.ProfileCompleted,
  };
  const { isUserProfileCompleted } = useAppSelector((state) => state.appConfig);
  //   const { handleLogout } = useAuthentication();

  useEffect(() => {
    const { pathname } = router;
    const pathSegments = pathname.split('/');
    const secondSegment = pathSegments[2];
    secondSegment
      ? setRequestName(secondSegment)
      : setRequestName(pathSegments[1]);
  }, [router]);

  const handleNavigation = (link: string, routName: string) => {
    if (routName === 'out') {
      //   handleLogout();
    } else {
      if (
        Boolean(
          userInfo?.type === 'contractor' &&
            userInfo?.isProfileCompleted !== ProfileStatus.ProfileCompleted &&
            !isUserProfileCompleted,
        )
      ) {
        toast.error('Please Complete Your Profile First.');
      } else {
        navigate(link);
      }
    }
  };

  const renderMenuItems = (menu: SideBarMenuItem[]) => {
    const renderButton = (item: SideBarMenuItem) => {
      return item?.button ? (
        <EpButton
          isDisabled
          my={2}
          size='sm'
          borderRadius='3xl'
          colorScheme='primary'
          onClick={() => console.log('>>>>>>')}
          w='full'
          fontWeight='700'
          leftIcon={item.icon}
          variant='solid'
        >
          {item.title}
        </EpButton>
      ) : (
        <EpButton
          onClick={() => handleNavigation(item.link, item.routName)}
          w='full'
          fontWeight='700'
          textAlign='start'
          justifyContent='start'
          leftIcon={<EpBox color='primary.500'>{item.icon}</EpBox>}
          variant='ghost'
          bg={requestName === item.routName ? 'primary.50' : ''}
        >
          {item.title}
        </EpButton>
      );
    };

    const renderTooltipButton = (item: SideBarMenuItem) => (
      <EpTooltip label={item.title}>
        <IconButton
          onClick={() => handleNavigation(item.link, item.routName)}
          size='md'
          bg={requestName === item.routName ? 'primary.50' : ''}
          variant='ghost'
          colorScheme='primary'
          aria-label={item.title}
          icon={item.icon}
        />
      </EpTooltip>
    );

    return menu.map((item, index) => (
      <EpBox key={index}>
        {index !== 0 && (
          <EpBox>
            <EPDivider label='' />
          </EpBox>
        )}
        {!isOpen ? renderButton(item) : renderTooltipButton(item)}
      </EpBox>
    ));
  };

  return (
    <>
      <EpFlex flex={0}>
        <EpLogo hideLabel={isOpen} logoHeight='40px' logoWidth='40px' />
      </EpFlex>

      <EpStack flex={1} gap={0} mt={3}>
        {renderMenuItems(
          userInfo?.type === 'client'
            ? EpClientDashboardSideMenu
            : EpContractorDashboardSideMenu,
        )}
      </EpStack>

      <EpStack>
        {renderMenuItems(bottomAppMenu)}
        {!isOpen && (
          <EpTypography mt={1} fontSize='sm'>
            App Version 1.2
          </EpTypography>
        )}
      </EpStack>
    </>
  );
};

export default EpSideBar;
