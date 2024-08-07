import EpFlex from '~/ep-web-components/EpComponents/EpFlex/EpFlex';
import TasksHeadings from './components/TaskHeading';
import TasksList from './components/TaskList';

const Tasks: React.FC = () => {
  return (
    <EpFlex
      border='1px, ,transparent'
      flexDir='column'
      borderRadius={8}
      w='full'
      h={{ base: '390px', md: '460px', xl: '470px' }}
      bg='#FFFFFF'
      gap={2}
    >
      <TasksHeadings />
      <TasksList />
    </EpFlex>
  );
};

export default Tasks;
