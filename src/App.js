import { RouterProvider } from 'react-router-dom';
import './Global.scss';
import router from './routes';
import ErrorBoundary from './components/errorboundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;