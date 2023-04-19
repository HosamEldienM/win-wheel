import {
  RouterProvider,
  HashRouter,
  createBrowserRouter,
  Route,
  createRoutes,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

import { Final } from "./pages/finalPage";
import { Game } from "./pages/gamePage";
import { Initial } from "./pages/initialPage";

function App() {
  const auth = useSelector((state) => state);
  console.log(auth);

  const routes = [
    {
      path: "",
      element: <Initial />,
    },
    {
      path: "/game",
      element: auth.isGameAuth ? <Game /> : <Navigate to="/" replace />,
    },
    {
      path: "/final",
      element: auth.isFinalAuth ? <Final /> : <Navigate to="/game" replace />,
    },
  ];

  return <Route path="/" element={createRoutes(routes)} />;
  // <RouterProvider router={router} />;
}

export default App;
