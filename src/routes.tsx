import type { RouteRecord } from 'vite-react-ssg';

import App from './App';
import Cachaca from './pages/Cachaca';
import Gin from './pages/Gin';
import Glossario from './pages/Glossario';
import Historia from './pages/Historia';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Receitas from './pages/Receitas';
import Rum from './pages/Rum';
import Tequila from './pages/Tequila';
import Vinho from './pages/Vinho';
import Vodka from './pages/Vodka';
import Whisky from './pages/Whisky';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/whisky', element: <Whisky /> },
      { path: '/vodka', element: <Vodka /> },
      { path: '/gin', element: <Gin /> },
      { path: '/rum', element: <Rum /> },
      { path: '/tequila', element: <Tequila /> },
      { path: '/cachaca', element: <Cachaca /> },
      { path: '/vinho', element: <Vinho /> },
      { path: '/historia', element: <Historia /> },
      { path: '/glossario', element: <Glossario /> },
      { path: '/receitas', element: <Receitas /> },
      // { path: '/tecnicas', element: <Tecnicas /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
