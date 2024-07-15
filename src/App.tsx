import { BrowserRouter } from 'react-router-dom';
import AppProviders from './providers';
import { AuthProvider } from './providers/AuthProvider';
import Router from './router/Router/Router';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProviders>
          <Router />
        </AppProviders>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
