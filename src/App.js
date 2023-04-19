import {
  RouterProvider,
  HashRouter,
  createBrowserRouter,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { Final } from "./pages/finalPage";
import { Game } from "./pages/gamePage";
import { Initial } from "./pages/initialPage";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(true);
  // const [isAuth, setIsAuth] = useState(true);
  const auth = useSelector((state) => state);
  console.log(auth);

  const router = createBrowserRouter([
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
  ]);

  return <HashRouter router={router} />;
}

export default App;
