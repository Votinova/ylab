import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Take from './Take.tsx'
import Registr  from './Registr.tsx';
import Page from './Page.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Take />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/registr",
    element: <Registr />
  },
  {
    path: "/page",
    element: <Page />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
