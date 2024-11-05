import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const BannerHome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/reservation");
  };
  return (
    <Box
      sx={{
        backgroundColor: "#FF6185",
        flexDirection: { xs: "column", md: "row" },
      }}
      width={"100%"}
      display={"flex"}
    >
      <Box
        sx={{ width: { xs: "100%", md: "40%" } }}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          height={"max-content"}
          flexDirection={"column"}
          alignItems={"center"}
          padding={"15px"}
        >
          <img
            src="https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420740/banner-home-hallo-corona_eemeue.png"
            style={{
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <Button
            sx={{
              textTransform: "none",
              color: "#FF6185",
              backgroundColor: "white",
              gap: "10px",
              width: "60%",
              display: { xs: "none", md: "flex", lg: "flex" },
            }}
            size="large"
            startIcon={
              <img
                src="https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420745/Group_slp76s.png"
                style={{ width: "70%" }}
              />
            }
            variant="outlined"
            onClick={handleClick}
          >
            Konsultasi Dengan Dokter
          </Button>
        </Box>
      </Box>
      <Box
        sx={{ width: { xs: "100%", md: "60%", paddingTop: {xs: "0px", md: "0px", lg: "25px"} } }}
        justifyContent={"center"}
        alignItems={"center"}
        margin={"auto"}
        paddingBottom={"25px"}
      >
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignSelf={"center"}
          margin={"auto"}
          gap={"25px"}
        >
          <img
            src="https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420740/Crowd_l118of.png"
            alt="crowd"
            width={"16%"}
          />
          <img
            src="https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420746/Hand_lvl7dj.png"
            alt="hand"
            width={"17%"}
          />
          <img
            src="https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420744/Eyes_saccyx.png"
            alt="eyes"
            width={"15%"}
          />
          <img
            src="https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420747/House_kz9pab.png"
            alt="house"
            width={"15%"}
          />
        </Stack>
        <Box
          sx={{
            width: "80%",
            display: { md: "none" },
            margin: "auto",
            marginTop: "20px",
          }}
        >
          <Button
            sx={{
              textTransform: "none",
              color: "#FF6185",
              backgroundColor: "white",
              gap: "10px",
              width: "100%",
            }}
            size="large"
            startIcon={
              <img
                src="https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420745/Group_slp76s.png"
                style={{ width: "70%" }}
              />
            }
            variant="outlined"
            onClick={handleClick}
          >
            Konsultasi Dengan Dokter
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
