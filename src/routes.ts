import { RouteConfig } from "react-router-config";
import Main from "./pages/main";
import useUseContext from "./pages/miscellaneous/useUseContext";
import UseUseReducer from "./pages/miscellaneous/useUseReducer";
import UseUseRef from "./pages/miscellaneous/useUseRef";
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
    path: "/useusecontext",
    component: useUseContext,
  },
  {
    path: "/useusestate",
    component: UseUseState,
  },
  {
    path: "/useusereducer",
    component: UseUseReducer,
  },
  {
    path: "/useuseref",
    component: UseUseRef,
  },
];
export default routes;
