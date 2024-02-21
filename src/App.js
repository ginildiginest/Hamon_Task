import { createBrowserRouter } from 'react-router-dom';
import Home from './screen/home';
import { getRestaurants } from './api/home';
import Error from './screen/Error';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: getRestaurants,
    errorElement: <Error />
  },

]);
