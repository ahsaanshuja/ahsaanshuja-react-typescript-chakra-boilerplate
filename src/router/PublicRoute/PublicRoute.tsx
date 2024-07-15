import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Navigate } from 'react-router-dom';
import { ErrorState } from '../../components/ErrorState';
import { Loader } from '../../components/Loader';
import { useSession } from '../../hooks';

type Props = {
  children: ReactNode;
};

function PublicRoute(props: Props) {
  const { children } = props;

  const { isAuthenticated } = useSession();

  if (isAuthenticated) {
    return <Navigate to='/' />;
  }

  return (
    <ErrorBoundary
      fallback={<ErrorState text='An error occurred in the application.' />}
    >
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default PublicRoute;
