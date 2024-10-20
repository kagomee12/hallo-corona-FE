import { Navigate } from "react-router-dom";
import { useGetUserMe } from "./hooks/use-get-user-me";
import { Box } from "@mui/material";

// Loader untuk memeriksa autentikasi
export const AuthLoader = ({ children }: { children: JSX.Element }) => {
  const { data, isLoading } = useGetUserMe();
  
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading...
      </Box>
    ); // Kamu bisa menampilkan loading screen
  }
  if (!data) {
    return <Navigate to="/" />; // Redirect ke home jika tidak login
  }
  return children;
};
