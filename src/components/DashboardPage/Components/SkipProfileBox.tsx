import { HStack, useBreakpointValue } from '@chakra-ui/react';
// import { useRouter } from 'next/router';
import { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
// import { useAppContext } from '~/context/appContext';
import EpButton from '~/ep-web-components/EpComponents/EpButton/EpButton';
import EpFlex from '~/ep-web-components/EpComponents/EpFlex/EpFlex';
import EpStack from '~/ep-web-components/EpComponents/EpStack/EpStack';
import EpTypography from '~/ep-web-components/EpComponents/EpTypography/EpTypography';

const SkipProfileBox: FC = () => {
  //   const { setShowCompleteProfileBox } = useAppContext();
  //   const router = useRouter();

  const isMobile = useBreakpointValue({ base: true, lg: false });
  const DesktopView = () => (
    <HStack
      justifyContent={'space-between'}
      color={'white'}
      p={4}
      bg={'secondary.700'}
      w={'100%'}
      borderRadius={'md'}
    >
      <EpStack>
        <EpTypography fontSize={'22px'} fontWeight={700}>
          Considering adding your company?
        </EpTypography>
        <EpTypography fontSize={'14px'}>
          {`Your account is now active! If it aligns with your goals, you're
          invited to include your company details in your profile.`}
        </EpTypography>
      </EpStack>
      <EpStack direction='row' spacing={4} align='center'>
        <EpButton
          //   onClick={() => setShowCompleteProfileBox(false)}
          colorScheme='black'
          color={'white'}
          variant='link'
        >
          Don’t show again
        </EpButton>
        <EpButton
          //   onClick={() => setShowCompleteProfileBox(false)}
          colorScheme='black'
          color={'white'}
          variant='outline'
        >
          Remind me later
        </EpButton>
        <EpButton
          //   onClick={() => router.push('/dashboard/profile')}
          rightIcon={<FaArrowRight />}
          colorScheme='primary'
        >
          Add company details
        </EpButton>
      </EpStack>
    </HStack>
  );

  const MobileView = () => (
    <EpStack
      color={'white'}
      p={4}
      bg={'secondary.700'}
      w={'100%'}
      borderRadius={'md'}
    >
      <EpStack>
        <EpTypography fontSize={'18px'} fontWeight={600}>
          Considering adding your company?
        </EpTypography>
        <EpTypography fontSize={'12px'}>
          {`Your account is now active! If it aligns with your goals, you're
          invited to include your company details in your profile.`}
        </EpTypography>
      </EpStack>
      <EpFlex alignItems={'center'} justifyContent={'center'} gap={4}>
        <EpButton
          size={'sm'}
          //   onClick={() => router.push('/dashboard/profile')}
          rightIcon={<FaArrowRight />}
          colorScheme='primary'
        >
          Add company details
        </EpButton>
        <EpButton
          size={'sm'}
          //   onClick={() => setShowCompleteProfileBox(false)}
          colorScheme='black'
          color={'white'}
          variant='outline'
        >
          Remind me later
        </EpButton>
      </EpFlex>
      <EpFlex justifyContent={'center'}>
        <EpButton
          size={'sm'}
          //   onClick={() => setShowCompleteProfileBox(false)}
          colorScheme='black'
          color={'white'}
          variant='link'
        >
          Don’t show again
        </EpButton>
      </EpFlex>
    </EpStack>
  );
  return isMobile ? <MobileView /> : <DesktopView />;
};

export default SkipProfileBox;
