import { SlOptions } from 'react-icons/sl';
import EpBox from '~/ep-web-components/EpComponents/EpBox/EpBox';
import EpFlex from '~/ep-web-components/EpComponents/EpFlex/EpFlex';
import EpTypography from '~/ep-web-components/EpComponents/EpTypography/EpTypography';

const data = [
  { task: ' Task 1- Lorem ipsum consectetur adipisicing.', day: 'Today' },
  { task: ' Task 1- Lorem ipsum consectetur adipisicing.', day: 'Today' },
  { task: ' Task 1- Lorem ipsum consectetur adipisicing.', day: 'Today' },
  { task: ' Task 1- Lorem ipsum consectetur adipisicing.', day: 'Today' },
];

const TasksList = () => {
  return (
    <>
      {data.map((task, index) => (
        <EpFlex
          key={index}
          bg={'neutral.100'}
          justify='space-between'
          align='center'
          padding={{ base: 2, md: 4 }}
          borderRadius={8}
          borderLeftWidth={4}
          borderLeftColor={'primary.500'}
          marginX={{ base: 2, md: 4 }}
          marginTop={2}
        >
          <EpBox>
            <EpTypography
              width={{ base: '270px', xl: 'full' }}
              fontSize={16}
              fontWeight={500}
              color={'neutral.700'}
              isTruncated
            >
              {task.task}
            </EpTypography>
            <EpTypography fontSize={14} color='#9CA3AF'>
              {task.day}
            </EpTypography>
          </EpBox>
          <EpBox>
            <SlOptions style={{ cursor: 'pointer' }} />
          </EpBox>
        </EpFlex>
      ))}
      ;
    </>
  );
};

export default TasksList;
