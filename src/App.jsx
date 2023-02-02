import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { store } from "./app/store";

import { Landing, Error, Register, ProtectedRoute } from "./pages";
import {
  Profile,
  Stats,
  AddJob,
  AllJobs,
  SharedLayout,
} from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <SharedLayout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Stats />,
      },
      {
        path: "all-jobs",
        element: <AllJobs />,
      },
      {
        path: "add-job",
        element: <AddJob />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "landing",
    element: <Landing />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer position="top-center" />
      </Provider>
    </div>
  );
}

export default App;
