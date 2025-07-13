import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SignUp from "@/components/pages/SignUp";
import Login from "@/components/pages/Login";

export const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Routes location={location}>
            <Route
              path={AppRouteHelper.confirmSignUp()}
              element={<SignUp />}
            />
            <Route
              path={AppRouteHelper.login()}
              element={<Login />}
            />
          </Routes>
        } 
      />
    </Routes>
  );
};

export class AppRouteHelper {
  static basePath = (path: string): string => `/${path}`;

  public static root = (): string => "/";
  public static home = (): string => "/home";
  public static confirmSignUp = (): string =>
    AppRouteHelper.basePath("signup");
  public static login = (): string => AppRouteHelper.basePath("login");
}
