import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './i18n';

import App from './App.tsx';
import { Home } from '@pages/home/home.tsx';
import { AboutMe } from '@pages/aboutMe/aboutMe.tsx';
import { Projects } from '@pages/projects/projects.tsx';
import { ProjectDetail } from '@pages/projectDetail/projectDetail.tsx';
// import { Lab } from '@pages/lab/lab.tsx';
import { NotFound } from '@pages/notFound/notFound.tsx';

import { ROUTES } from '@constants/routes.ts';

import './index.css';

const {
  ABOUT_ME,
  PROJECTS,
  // LAB
} = ROUTES;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: `/${ABOUT_ME}`,
        element: <AboutMe />,
      },
      {
        path: `/${PROJECTS}`,
        element: <Projects />,
      },
      {
        path: `/${PROJECTS}/:projectDetailId`,
        element: <ProjectDetail />,
      },
      // {
      //   path: `/${LAB}`,
      //   element: <Lab />,
      // },
    ],
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
