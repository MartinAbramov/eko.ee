import { ViteReactSSG } from 'vite-react-ssg';
import App from './App';

const routes = [
  {
    path: '/',
    element: <App />,
  },
];

export const createRoot = ViteReactSSG({ routes });
