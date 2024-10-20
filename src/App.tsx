import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setAuthToken } from "./services/api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createTheme, ThemeProvider } from "@mui/material";

//variable funtion
const App = () => {
  setAuthToken(localStorage.getItem("token")?.toString() ?? "");
  const queryClient = new QueryClient();
  const theme = createTheme({
    typography: {
      fontFamily: [
        '"Apple Color Emoji"'
      ].join(','),
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <ToastContainer />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
