import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/features/auth/authSlice";
import { selectDarkMode } from "./redux/features/layout/layoutSlice";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./controllers/theming/theme";

import MainLayout from "./layouts/MainLayout";
import UnauthenticatedLayout from "./layouts/UnauthenticatedLayout";

import DashboardPage from "./pages/DashboardPage";
import BlankPage from "./pages/BlankPage";
import LoginPage from "./pages/LoginPage";

const LayoutRoute = ({
  Layout,
  requireLoggedIn = true,
  children,
  ...props
}) => {
  const isloggedIn = useSelector(selectIsLoggedIn);
  const finalComponent = Layout ? <Layout>{children}</Layout> : <>{children}</>;
  const loginRedirect = (path) => <Redirect to={`/login?next=${path}`} />;
  const loginOrFinal = (path) =>
    isloggedIn ? finalComponent : loginRedirect(path);
  const path = props.path;

  return (
    <Route {...props}>
      {requireLoggedIn ? loginOrFinal(path) : finalComponent}
    </Route>
  );
};

function App() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <ThemeProvider theme={theme(darkMode)}>
      <Router>
        <Switch>
          <LayoutRoute exact path="/">
            <Redirect to="/dashboard" />
          </LayoutRoute>
          <LayoutRoute
            Layout={UnauthenticatedLayout}
            requireLoggedIn={false}
            path="/login"
          >
            <LoginPage />
          </LayoutRoute>
          <LayoutRoute Layout={MainLayout} path="/dashboard">
            <DashboardPage />
          </LayoutRoute>
          <LayoutRoute Layout={MainLayout} path="/admin">
            <BlankPage />
          </LayoutRoute>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
