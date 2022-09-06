import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { Outlet } from "react-router-dom";

const useAuth = () =>
{
  const user = useSelector((state) => state?.users);
  const { userAuth } = user;

  return userAuth && userAuth.isAdmin;
};
const AdminRoute = ({ component: Component, ...rest }) =>
{
  //check if user is loggin

  const isAuth = useAuth();
  return isAuth ? <Outlet /> : (
    <>
      only admins can access this page
    </>
  );
};

export default AdminRoute;
