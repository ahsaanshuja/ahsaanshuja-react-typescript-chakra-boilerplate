import { Route, Routes } from 'react-router-dom';

import { useRoutePaths } from '../../hooks';
import { Home } from '../../pages';
import { PublicRoute } from '../PublicRoute';

function Router() {
  const {
    LOGIN_PATH,
    METRICS_PATH,
    REGISTER_PATH,
    ROOT_PATH,
    USERS_PATH,
    USER_PATH,
  } = useRoutePaths();

  return (
    <Routes>
      <Route
        path={ROOT_PATH}
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
          //   <PrivateRoute redirectTo={LOGIN_PATH}>

          //   </PrivateRoute>
        }
      />

      {/* <Route
        path={LOGIN_PATH}
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      /> */}

      {/* <Route path={REGISTER_PATH} element={<Register />} /> */}

      {/* <Route
        path={METRICS_PATH}
        element={
          <PrivateRoute permissions={['metrics.list']} redirectTo={LOGIN_PATH}>
            <Metrics />
          </PrivateRoute>
        }
      /> */}

      {/* <Route
        path={USERS_PATH}
        element={
          <PrivateRoute permissions={['users.list', 'users.create']}>
            <Users />
          </PrivateRoute>
        }
      />

      <Route
        path={USER_PATH}
        element={
          <PrivateRoute permissions={['users.list', 'users.create']}>
            <Users />
          </PrivateRoute>
        }
      /> */}

      <Route path='*' element={<h1>404</h1>} />
    </Routes>
  );
}

export default Router;
