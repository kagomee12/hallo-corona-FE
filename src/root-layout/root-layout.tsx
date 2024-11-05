import Navbar from "../components/navbar/navbar";
import { Navigate, Outlet } from "react-router-dom";
import { useGetUserMe } from "../hooks/use-get-user-me";
const RootLayout = () => {
  const { data: user } = useGetUserMe();
  if (user && user.role === "doctor") {
    return <Navigate to="/doctor" />;
  }
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
