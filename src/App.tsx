import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './global/common/redux/store';
import AppProviders from './providers';
import { AuthProvider } from './providers/AuthProvider';
import Router from './router/Router/Router';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProviders>
          <Provider store={store}>
            <Router />
          </Provider>
        </AppProviders>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

// import TimerSettingsController from '../src/components/Controller';
// import Display from './components/Display/Display';
// import { StopWatchProvider } from './contexts/stopWatchContext';
// function App() {
//   return (
//     <StopWatchProvider>
//       <TimerSettingsController />
//       <Display />
//     </StopWatchProvider>
//   );
// }

// export default App;
