import { RouteConfig } from "react-router-config";
import Main from "./pages/main";
import UseUseState from "./pages/miscellaneous/useUseState";
import RenderProps from "./pages/renderProps";
const routes: RouteConfig[] = [
  {
    path: "/",
    component: Main,
    exact: true,
  },
  {
    path: "/renderprops",
    component: RenderProps,
  },
  {
    path: "/useusestate",
    component: UseUseState,
  },
];
export default routes;
