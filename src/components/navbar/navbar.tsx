import { Box, Button } from "@mui/material";
import { RegisterModal } from "../../pages/auth/register";
import { useOpenDisModal } from "../../hooks/openDisModal";
import { LoginModal } from "../../pages/auth/login";
import { useGetUserMe } from "../../hooks/use-get-user-me";
import React, { useEffect } from "react";
import { AccountMenu } from "./account-menu";

const navbar = () => {
  const { data: isUser, isLoading } = useGetUserMe();
  const [isLogin, setIsLogin] = React.useState<Boolean>(false);

  useEffect(() => {
    if (isUser && !isLoading) {
      setIsLogin(true);
    }
  }, [isUser, isLoading]);

  const {
    handleCloseLogin,
    handleCloseRegister,
    handleOpenLogin,
    handleOpenRegister,
    openLogin,
    openRegister,
  } = useOpenDisModal();

  return (
    <>
      <Box
        width={"100%"}
        sx={{ display: "flex", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
        margin={"auto"}
        justifyContent={"space-between"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ padding: "10px" }}
        >
          <img src="https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420749/Icon_pjsdvu.png" alt="logo" width={"310px"} />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ padding: "15px" }}
          gap={"20px"}
        >
          {isLogin ? (
            <AccountMenu user={isUser!} setIsLogin={() => setIsLogin(false)} />
          ) : (
            <>
              <Button
                variant="outlined"
                style={{
                  borderColor: "#FF6185",
                  color: "#FF6185",
                  textTransform: "none",
                  width: "100px",
                  height: "50px",
                }}
                onClick={handleOpenRegister}
              >
                Sign Up
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#FF6185",
                  textTransform: "none",
                  width: "100px",
                  height: "50px",
                }}
                onClick={handleOpenLogin}
              >
                Sign In
              </Button>
            </>
          )}
        </Box>
      </Box>
      <RegisterModal
        handleCloseRegister={handleCloseRegister}
        openRegister={openRegister}
        handleOpenLogin={handleOpenLogin}
      />
      <LoginModal
        handleCloseLogin={handleCloseLogin}
        openLogin={openLogin}
        handleOpenRegister={handleOpenRegister}
      />
    </>
  );
};

export default navbar;
