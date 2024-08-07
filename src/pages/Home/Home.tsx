// import TasksHeadings from '~/components/DashboardPage/Task/components/TaskHeading';
// import TasksList from '~/components/DashboardPage/Task/components/TaskList';
// import EpFlex from '~/ep-web-components/EpComponents/EpFlex/EpFlex';
// import EpStack from '~/ep-web-components/EpComponents/EpStack/EpStack';

// function Home() {
//   return (
//     <EpStack display={'flex'} flexDirection={'column'} gap={5}>
//       <EpFlex
//         border='1px, ,transparent'
//         flexDir='column'
//         borderRadius={8}
//         w='full'
//         h={{ base: '390px', md: '460px', xl: '470px' }}
//         bg='#FFFFFF'
//         gap={2}
//       >
//         <TasksHeadings />
//         <TasksList />
//       </EpFlex>
//     </EpStack>
//   );
// }

// export default Home;

import {
  Collapse,
  Hide,
  Show,
  Tab,
  TabList,
  Tabs,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FC } from 'react';
import Dashboard from '~/components/DashboardPage';
import SkipProfileBox from '~/components/DashboardPage/Components/SkipProfileBox';
import Tasks from '~/components/DashboardPage/Task/Tasks';
import EpBox from '~/ep-web-components/EpComponents/EpBox/EpBox';
import EpFlex from '~/ep-web-components/EpComponents/EpFlex/EpFlex';
import EpStack from '~/ep-web-components/EpComponents/EpStack/EpStack';
// import ActiveProjects from './Components/ActiveProjects/ActiveProjects';
// import DashboardCharts from './Components/DashboardCharts/DashboardCharts';
// import DashboardCover from './Components/DashboardCover';
// import ExpensesSummary from './Components/ExpensesSummary/ExpensesSummary';
// import MyCalendar from './Components/MyCalendar/MyCalendar';
// import NewProposals from './Components/NewProposals/NewProposals';
// import Requests from './Components/Requests/Requests';
// import SkipProfileBox from './Components/SkipProfileBox';
// import Tasks from './Components/Task/Tasks';
// import useDashboard from './Hooks/useDashboard';

const DashboardPage: FC = () => {
  //   const { dashboardChartsInfo } = useHome();
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <EpStack w='full' borderRadius={8} bg={'#374151'}>
      <Dashboard>
        {!isMobile && (
          <Collapse in={true}>
            <SkipProfileBox />
          </Collapse>
        )}
        {/* <DashboardCover /> */}
        {isMobile && (
          <EpBox mt={'-60px'} p={3}>
            <Collapse in={true}>
              <SkipProfileBox />
            </Collapse>
          </EpBox>
        )}
        <Hide below='xl'>
          <EpFlex w='full' gap={4}>
            <EpFlex w='full' gap={4} flexDir='column'>
              <EpFlex w='full' gap={4}>
                {/* <DashboardCharts
                isLoading={true}
                chartsMapper={dashboardChartsInfo}
              /> */}
              </EpFlex>
              {/* <ExpensesSummary /> */}
            </EpFlex>
            {/* <EpBox width='45%' marginTop={3}>
            <MyCalendar />
          </EpBox> */}
          </EpFlex>
          <EpFlex width='full' marginY={4} gap={4}>
            {/* <EpFlex width='60%'>
            <NewProposals />
          </EpFlex> */}
            {/* <EpFlex width='full'>
            <Requests isLoading={requestLoader} />
          </EpFlex> */}
          </EpFlex>
          <EpFlex width='full' gap={4}>
            {/* <EpFlex width='full'>
            <ActiveProjects />
          </EpFlex> */}
            <EpFlex width='60%'>
              <Tasks />
            </EpFlex>
          </EpFlex>
        </Hide>
        <Show below='xl'>
          <EpFlex width='full' gap={4}>
            {/* <DashboardCharts
            isLoading={chartsLoader}
            chartsMapper={dashboardChartsInfo}
          /> */}
          </EpFlex>
          <Hide above='sm'>
            <Tabs fontWeight={'bold'} marginBottom={2} overflow='scroll'>
              <TabList fontSize={5}>
                <Tab>Financial</Tab>
                <Tab>Calendar</Tab>
                <Tab>Proposal</Tab>
                <Tab>Requests</Tab>
                <Tab>Tasks</Tab>
                <Tab>Projects</Tab>
              </TabList>
            </Tabs>
          </Hide>
          {/* <ExpensesSummary /> */}
          {/* <EpFlex width='full'>
          <MyCalendar />
        </EpFlex> */}
          {/* <EpFlex width='full'>
          <NewProposals />
        </EpFlex> */}
          {/* <EpFlex width='full'>
          <Requests isLoading={requestLoader} />
        </EpFlex> */}
          <EpFlex width='full'>
            <Tasks />
          </EpFlex>
          {/* <EpFlex width='full'>
          <ActiveProjects />
        </EpFlex> */}
        </Show>
      </Dashboard>
    </EpStack>
  );
};

export default DashboardPage;
