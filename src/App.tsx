import { RouterProvider } from "react-router-dom";
import "./App.css";
import authRoutes from "./routes/auth-routes";
import appRoutes from "./routes/app-routes";

function App() {
  const token = localStorage.getItem("loggedIn");
  console.log(token);
  return (
    <>
      <RouterProvider router={token === "yes" ? appRoutes : authRoutes} />
    </>
  );
}

export default App;
