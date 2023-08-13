import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import QuincyNFTPage from './components/QuincyNFTPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BananaFarm from './components/BananaFarmPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "quincynft",
        element: <QuincyNFTPage />
      },
      {
        path: "bananafarm",
        element: <BananaFarm />
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
