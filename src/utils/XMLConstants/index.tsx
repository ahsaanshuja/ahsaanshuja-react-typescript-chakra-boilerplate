import { Tag } from '@chakra-ui/react';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineLogout } from 'react-icons/hi';
import { MdOutlineSettings } from 'react-icons/md';

import UAE from '~/SVG/flags/UAE';
import USA from '~/SVG/flags/USA';
import EpFlex from '~/ep-web-components/EpComponents/EpFlex/EpFlex';
import {
  ImageItem,
  TextItem,
} from '~/ep-web-components/EpComponents/EpMenu/EpMenu';
import EpTypography from '~/ep-web-components/EpComponents/EpTypography/EpTypography';

export const supportedLanguagesList: ImageItem[] = [
  {
    type: 'image',
    icon: <USA />,
    label: 'English',
    key: 'en',
  },
  {
    type: 'image',
    icon: <UAE />,
    label: 'Arabic - العربية',
    key: 'ar',
  },
];

export const userDetailsItems: ImageItem[] = [
  {
    type: 'image',
    icon: <CgProfile />,
    label: 'Profile',
  },
  {
    type: 'image',
    icon: <MdOutlineSettings />,
    label: 'Settings',
  },
  {
    type: 'image',
    icon: <HiOutlineLogout />,
    label: 'Sign Out',
  },
];
export const PAGE_SIZE = 10;

const notificationBox = (title: string, count?: string | number) => (
  <EpFlex w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
    <EpTypography>{title}</EpTypography>
    {count && (
      <Tag size={'sm'} rounded={'full'} variant='solid' colorScheme='red'>
        12
      </Tag>
    )}
  </EpFlex>
);
export const NotificationMenuList: TextItem[] = [
  {
    type: 'text',
    label: notificationBox('Chat', '20'),
  },
  {
    type: 'text',
    label: notificationBox('Discussion', '12'),
  },
  {
    type: 'text',
    label: notificationBox('Reviews', ''),
  },
  {
    type: 'text',
    label: notificationBox('Support', ''),
  },
];
