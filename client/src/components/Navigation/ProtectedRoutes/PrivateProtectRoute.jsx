import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const useAuth = () =>
{
  const user = useSelector((state) => state?.users);
  const { userAuth } = user;

  return userAuth && userAuth;
};
const PrivateProtectRoute = () =>
{
  //check if user is loggin
  const navigate = useNavigate();

  const isAuth = useAuth();
  return isAuth ? <Outlet /> : (
    <>
      you need to login
    </>
  );
};

export default PrivateProtectRoute;
