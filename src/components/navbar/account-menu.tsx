import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { User } from "../../types/store";
import { useQueryClient } from "@tanstack/react-query";
import { setAuthToken } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface IAccountMenuProps {
  user: User;
  setIsLogin: (status: boolean) => void;
}
export const AccountMenu: React.FC<IAccountMenuProps> = ({
  user,
  setIsLogin,
}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (user.role === "doctor") {
      return navigate("/doctor/profile-doctor");
    }
    navigate("/profile-patient");
  };
  const handleNavigate2 = () => {
    if (user.role === "doctor") {
      return navigate("/doctor/article");
    }
    navigate("/consulation");
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const queryClient = useQueryClient();
  const handleLogout = () => {
    setAnchorEl(null);
    setIsLogin(false);
    setAuthToken();
    localStorage.removeItem("token");
    queryClient.invalidateQueries({ queryKey: ["auth/me"] });
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            sx={{ width: 50, height: 50, backgroundColor: "#FF6185" }}
            src={user?.profilePic}
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleNavigate}>
          <ListItemIcon>
            <Avatar
              sx={{ backgroundColor: "#FF6185" }}
              src={user?.profilePic}
            />{" "}
            Profile
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleNavigate2}>
          <ListItemIcon>
            <img
              src={
                user?.role === "doctor"
                  ? "https://res.cloudinary.com/dq1pow2vn/image/upload/v1729421617/Vector_1_npakcq.png"
                  : "https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420755/Mail_znkjwf.png"
              }
              alt="mail"
              width={"80%"}
            />
          </ListItemIcon>
          {user?.role === "doctor" ? "Add Article" : "Consultation"}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: "#FF6185" }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};
