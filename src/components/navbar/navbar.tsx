import { Box, Button } from "@mui/material";
import { RegisterModal } from "../../pages/auth/register";
import { useOpenDisModal } from "../../hooks/openDisModal";
import { LoginModal } from "../../pages/auth/login";
import { useGetUserMe } from "../../hooks/use-get-user-me";
import React, { useEffect } from "react";
import { AccountMenu } from "./account-menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DrawerMobile } from "./drawer-mobile";

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

  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          width: "100%",
        }}
        margin={"auto"}
        justifyContent={"space-between"}
      >
        <Box
          alignItems={"center"}
          sx={{ padding: "10px", width: { xs: "40%", md: "30%", lg: "30%" } }}
        >
          <img
            src="https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420749/Icon_pjsdvu.png"
            alt="logo"
            width={"100%"}
          />
        </Box>
        {isMobile ? (
          <Box
            width={"20%"}
            display={"flex"}
            justifyContent={"end"}
            alignItems={"center"}
          >
            <DrawerMobile
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              handleOpenLogin={handleOpenLogin}
              handleOpenRegister={handleOpenRegister}
            />
          </Box>
        ) : (
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ padding: { xs: "10px", md: "20px" } }}
            gap={"20px"}
          >
            {isLogin ? (
              <AccountMenu
                user={isUser!}
                setIsLogin={() => setIsLogin(false)}
              />
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
        )}
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
