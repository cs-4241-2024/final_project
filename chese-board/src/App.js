import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Start from './components/Start';
import Login from './components/Login';
import Home from './components/Home';
import Liked from './components/Liked';
import Builder from './components/Builder';
import SignUp from './components/SignUp';
import MyBuilds from './components/MyBuilds';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "builder",
    element: <Builder />,
  },
  {
    path: "my-builds",
    element: <MyBuilds />,
  },
  {
    path: "liked",
    element: <Liked />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
