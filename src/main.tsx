import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import QuincyNFTPage from './components/QuincyNFTPage';
import BananaFarm from './components/BananaFarmPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DisplayResults from './components/DisplayResultsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "quincynft",
        element: <QuincyNFTPage />,
      },
      {
        path: "bananafarm",
        element: <BananaFarm />,
      },
      {
        path: "displayresults",
        element: <DisplayResults/>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
