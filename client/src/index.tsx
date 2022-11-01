import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { rootLoader } from './routes/loaders/rootLoader';
import { CreateProfile } from './pages/profiles/createProfile';
import { SwipeInterface } from './pages/swipe/swipeInterface';
import { createProfileLoader } from './routes/loaders/createProfileLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SwipeInterface />,
    loader: rootLoader
  },{
    path: "/profile/create",
    element: <CreateProfile />,
    loader: createProfileLoader
  },{
    path: "/profile/view",
    element: <CreateProfile />,
    loader: createProfileLoader
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
