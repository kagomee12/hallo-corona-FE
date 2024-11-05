import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { useGetUserMe } from "../../hooks/use-get-user-me";
import { Avatar } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import { UseHandleNavigate } from "../../hooks/use-handle-navigate";
import { User } from "../../types/store";
import { QueryClient } from "@tanstack/react-query";
import { setAuthToken } from "../../services/api";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";

interface IDrawerMobileProps {
  setIsLogin: (status: boolean) => void;
  isLogin: Boolean;
  handleOpenLogin: () => void;
  handleOpenRegister: () => void;
}

export const DrawerMobile: React.FC<IDrawerMobileProps> = ({
  setIsLogin,
  isLogin,
  handleOpenLogin,
  handleOpenRegister,
}) => {
  const [open, setOpen] = React.useState(false);
  const { data } = useGetUserMe();

  const { handleNavigate, handleNavigate2 } = UseHandleNavigate(
    data ? data : ({} as User)
  );
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const queryClient = new QueryClient();
  const handleLogout = () => {
    setIsLogin(false);
    localStorage.removeItem("token");
    setAuthToken();
    queryClient.invalidateQueries({ queryKey: ["auth/me"] });
  };
  const drawerItems = [
    { text: "Profile", icon: <Avatar />, action: handleNavigate },
    {
      text: data?.role === "doctor" ? "Add Article" : "Consultation",
      icon: (
        <img
          src={
            data?.role === "doctor"
              ? "https://res.cloudinary.com/dq1pow2vn/image/upload/v1729421617/Vector_1_npakcq.png"
              : "https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420755/Mail_znkjwf.png"
          }
          alt="mail"
          width={"80%"}
        />
      ),
      action: handleNavigate2,
    },
  ];
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      {isLogin ? (
        <>
          <List>
            {drawerItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={item.action}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </>
      ) : (
        <>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleOpenLogin}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={handleOpenRegister}>
                <ListItemIcon>
                  <AppRegistrationIcon />
                </ListItemIcon>
                <ListItemText primary="Register" />
              </ListItemButton>
            </ListItem>
          </List>
        </>
      )}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} size="large">
        <MenuIcon sx={{ color: "#FF6185", size: "large" }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
};
