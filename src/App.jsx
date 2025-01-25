import GlobalStyles from "./styles/global";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
}
