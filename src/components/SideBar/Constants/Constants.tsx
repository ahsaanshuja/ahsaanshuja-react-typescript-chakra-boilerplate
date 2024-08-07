import { AiOutlineAppstore } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { CiLogout, CiShop } from 'react-icons/ci';
import { FiBriefcase } from 'react-icons/fi';
import { GrUserExpert } from 'react-icons/gr';
import { HiOutlineCalendar, HiOutlineDocument } from 'react-icons/hi';
import { IoIosAddCircle, IoIosHelpCircleOutline } from 'react-icons/io';
import {
  IoDocumentTextOutline,
  IoPaperPlaneOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { LuBriefcase, LuHome } from 'react-icons/lu';
import { PiDatabase } from 'react-icons/pi';
import { RiDashboard2Line } from 'react-icons/ri';
import { TbUsers } from 'react-icons/tb';

export interface SideBarMenuItem {
  title: string;
  icon: JSX.Element;
  link: string;
  gap?: boolean;
  routName: string;
  button?: boolean;
}

const EpContractorDashboardSideMenu: SideBarMenuItem[] = [
  {
    title: 'Dashboard',
    icon: <RiDashboard2Line size='20px' />,
    link: '/dashboard',
    routName: 'dashboard',
  },
  {
    title: 'Create New',
    icon: <IoIosAddCircle size='20px' />,
    link: '#',
    gap: true,
    routName: 'new',
    button: true,
  },
  {
    title: 'Requests',
    icon: <IoPaperPlaneOutline size='20px' />,
    gap: true,
    link: '/dashboard/request',
    routName: 'request',
  },
  {
    title: 'Quotes ',
    icon: <IoDocumentTextOutline size='20px' />,
    link: '/dashboard/quotation',
    routName: 'quotation',
  },
  {
    title: 'Jobs',
    icon: <FiBriefcase size='20px' />,
    link: '/dashboard/job',
    routName: 'job',
  },
  {
    title: 'Clients',
    icon: <BsPerson size='20px' />,
    link: '/dashboard/client',
    routName: 'client',
  },
  {
    title: 'Team',
    icon: <TbUsers size='20px' />,
    link: '/dashboard/team',
    gap: true,
    routName: 'team',
  },
  {
    title: 'Finance',
    icon: <PiDatabase size='20px' />,
    link: '/dashboard/finance',
    routName: 'finance',
  },
  {
    title: 'Calendar ',
    icon: <HiOutlineCalendar size='20px' />,
    link: '/dashboard/calendar',
    routName: 'calendar',
  },

  {
    title: 'Reports',
    icon: <HiOutlineDocument size='20px' />,
    link: '/dashboard/report',
    routName: 'report',
  },
  {
    title: 'Marketing',
    icon: <CiShop size='20px' />,
    link: '/dashboard/marketing',
    gap: true,
    routName: 'marketing',
  },
  {
    title: 'Leads',
    icon: <GrUserExpert size='20px' />,
    link: '/dashboard/leads',
    routName: 'leads',
  },
];

const EpClientDashboardSideMenu: SideBarMenuItem[] = [
  {
    title: 'Home',
    icon: <LuHome size='20px' />,
    link: process.env.NEXT_PUBLIC_LANDING_URL! || '',
    routName: 'home',
    button: false,
  },
  {
    title: 'Dashboard',
    icon: <RiDashboard2Line size='20px' />,
    link: '/dashboard',
    routName: 'dashboard',
  },
  {
    title: 'Create New',
    icon: <IoIosAddCircle size='20px' />,
    link: '',
    gap: true,
    routName: 'new',
    button: true,
  },
  {
    title: 'Projects',
    icon: <LuBriefcase size='20px' />,
    gap: true,
    link: '/dashboard/project',
    routName: 'project',
  },
  {
    title: 'Requests',
    icon: <IoPaperPlaneOutline size='20px' />,
    gap: true,
    link: '/dashboard/request',
    routName: 'request',
  },
  {
    title: 'Quotes',
    icon: <IoDocumentTextOutline size='20px' />,
    link: '/dashboard/quotation',
    routName: 'quotation',
  },
  {
    title: 'Contractors',
    icon: <BsPerson size='20px' />,
    link: '/dashboard/contractor',
    routName: 'contractor',
  },
  {
    title: 'Finance',
    icon: <PiDatabase size='20px' />,
    link: '/dashboard/finance',
    routName: 'finance',
  },
  {
    title: 'Calendar ',
    icon: <HiOutlineCalendar size='20px' />,
    link: '/dashboard/calendar',
    routName: 'calendar',
  },
  {
    title: 'Reports',
    icon: <HiOutlineDocument size='20px' />,
    link: '/dashboard/report',
    routName: 'report',
  },
];

const bottomAppMenu: SideBarMenuItem[] = [
  {
    title: 'Apps',
    icon: <AiOutlineAppstore size='20px' />,
    link: '/dashboard/leads',
    gap: true,
    routName: 'app',
  },
  {
    title: 'Help & Support',
    icon: <IoIosHelpCircleOutline size='20px' />,
    link: '/dashboard/leads',
    routName: 'help',
  },
  {
    title: 'Settings',
    icon: <IoSettingsOutline size='20px' />,
    link: '/dashboard/settings',
    routName: 'settings',
  },
  {
    title: 'Sign out',
    icon: <CiLogout size='20px' />,
    link: '/login',
    routName: 'out',
  },
];

export {
  EpClientDashboardSideMenu,
  EpContractorDashboardSideMenu,
  bottomAppMenu,
};
