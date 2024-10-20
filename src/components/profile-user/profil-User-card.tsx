import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { ModalEditProfile } from "./modal-edit-profile";
import { useOpenDisModal } from "../../hooks/openDisModal";
import { useGetUserMe } from "../../hooks/use-get-user-me";
import { useEffect } from "react";

export const ProfilUserCard = () => {
  const { handleCloseLogin, openLogin, handleOpenLogin } = useOpenDisModal();
  const { data, isLoading } = useGetUserMe();

  useEffect(() => {
    const load = async () => {
      if (isLoading) {
        return (
          <Typography
            variant="h4"
            color="#FF6185"
            justifyContent={"center"}
            alignItems={"center"}
          >
            Loading...
          </Typography>
        );
      }
    };
    load();
  });
  return (
    <Box
      width={"60%"}
      margin={"auto"}
      display={"flex"}
      flexDirection={"row"}
      sx={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        marginTop: "60px",
        marginBottom: "60px",
      }}
    >
      <Box width={"55%"} margin={"auto"} sx={{ padding: "20px" }}>
        <Typography
          sx={{ fontSize: "20px", fontWeight: 800, paddingBottom: "20px" }}
        >
          Personal Info
        </Typography>
        <Stack direction={"column"} gap={2}>
          <Box>
            <Stack direction={"row"} gap={2}>
              <Box
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
              >
                <Avatar />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                  {data?.fullname}
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                  Full name
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack direction={"row"} gap={2}>
              <Box
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
              >
                <img
                  src="https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420757/Vector_cxuakx.png"
                  width={35}
                />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                  {data?.email}
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                  Email
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack direction={"row"} gap={2}>
              <Box
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
              >
                <img src="https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420755/name_o0sfas.png" />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                  {data?.role}
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                  Status
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack direction={"row"} gap={2}>
              <Box
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
              >
                <img src="https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420744/gender_wrvnsc.png" />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                  {data?.gender}
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                  Gender
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack direction={"row"} gap={2}>
              <Box
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
              >
                <img src="https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420753/local_phone_wma4wb.png" />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                  {data?.phone}
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                  Mobile Phone
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack direction={"row"} gap={2}>
              <Box
                justifyContent={"center"}
                display={"flex"}
                alignItems={"center"}
              >
                <img src="https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420757/place_vgf4mr.png" />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                  {data?.address}
                </Typography>
                <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
                  Address
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Box width={"45%"} margin={"auto"}>
        <Box width={"80%"} margin={"auto"}>
          <img
            src={
              data?.profilePic ??
              "https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420742/examplearticles_h3jamd.jpg"
            }
            style={{ objectFit: "cover", width: "100%" }}
          />
          <Button
            style={{
              textTransform: "none",
              backgroundColor: "#FF6185",
              width: "100%",
              margin: "auto",
            }}
            variant="contained"
            component="span"
            onClick={handleOpenLogin}
          >
            Change Photo Profile
          </Button>
        </Box>
        <ModalEditProfile
          open={openLogin}
          handleClose={handleCloseLogin}
          pidture={data?.profilePic}
        />
      </Box>
    </Box>
  );
};
