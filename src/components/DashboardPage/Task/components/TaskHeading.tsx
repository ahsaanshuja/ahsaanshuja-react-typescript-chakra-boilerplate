import EpButton from '~/ep-web-components/EpComponents/EpButton/EpButton';
import EpFlex from '~/ep-web-components/EpComponents/EpFlex/EpFlex';
import EpTypography from '~/ep-web-components/EpComponents/EpTypography/EpTypography';

const TasksHeadings = () => {
  return (
    <EpFlex
      justify='space-between'
      align='center'
      bg={{ base: 'neutral.50', xl: 'white' }}
      padding={4}
      borderTopRadius={8}
    >
      <EpTypography
        marginTop={1}
        fontSize={18}
        color={'neutral.700'}
        fontWeight={600}
      >
        Tasks
      </EpTypography>
      <EpButton
        fontSize={{ base: '14px', md: '14px', xl: '16px' }}
        fontWeight={600}
        bg='none'
        color={'primary.500'}
      >
        See all tasks
      </EpButton>
    </EpFlex>
  );
};

export default TasksHeadings;
