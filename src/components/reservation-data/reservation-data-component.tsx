import { Box, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ReservationModal } from "./reservation-modal";
import React, { useEffect } from "react";
import { useGetReservation } from "../../services/hooks/reservation/use-get-reservation";
import { formatedDate } from "../../utils/formatted-data";

const ReservationDataComponent = () => {
  const { data, isLoading } = useGetReservation();
  useEffect(() => {
    const load = async () => {
      if (isLoading)
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
    };
    load();
  }, [data, isLoading]);

  const [open, setOpen] = React.useState(false);
  const [reservationId, setReservationId] = React.useState(0);
  const handleOpen = (id: number) => {
    setOpen(true);
    setReservationId(id);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <Typography
        variant="h4"
        color="#FF6185"
        marginBottom={"40px"}
        marginTop={"40px"}
        fontWeight={700}
        marginLeft={"15%"}
      >
        Reservasi Data
      </Typography>
      <Box
        width={{ xs: "95%", md: "80%", lg: "80%" }}
        margin={"auto"}
        sx={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "15px",
        }}
        marginBottom={"30px"}
      >
        <Box width={"100%"}>
          <Box
            sx={{
              paddingTop: { xs: "10px", md: "20px", lg: "20px" },
              paddingBottom: { xs: "10px", md: "20px", lg: "20px" },
              borderBottom: "1px solid #E0E0E0",
              paddingLeft: { xs: "10px", md: "20px", lg: "20px" },
            }}
          >
            <Stack direction="row" alignItems={"start"}>
              <Typography
                width={"25%"}
                fontWeight={700}
                fontSize={{ xs: "12px", md: "18px", lg: "18px" }}
              >
                Name
              </Typography>
              <Typography
                width={"20%"}
                fontWeight={700}
                fontSize={{ xs: "12px", md: "18px", lg: "18px" }}
              >
                Date
              </Typography>
              <Typography
                width={"25%"}
                fontWeight={700}
                fontSize={{ xs: "12px", md: "18px", lg: "18px" }}
              >
                Subject
              </Typography>
              <Typography
                width={"15%"}
                fontWeight={700}
                fontSize={{ xs: "12px", md: "18px", lg: "18px" }}
              >
                Status
              </Typography>
              <Typography
                width={"15%"}
                align="center"
                fontSize={{ xs: "12px", md: "18px", lg: "18px" }}
              >
                Action
              </Typography>
            </Stack>
          </Box>
          {data?.data.map((item, index: number) => (
            <Box
              borderBottom={"1px solid #E0E0E0"}
              sx={{
                backgroundColor: index % 2 === 0 ? "#F9F9F9" : "white",
                paddingTop: "20px",
                paddingBottom: "20px",
                paddingLeft: { xs: "10px", md: "20px", lg: "20px" },
              }}
            >
              <Stack direction="row" justifyContent="center">
                <Typography
                  width={"25%"}
                  fontSize={{ xs: "12px", md: "18px", lg: "18px" }}
                >
                  {item.fullname}
                </Typography>
                <Typography
                  width={"20%"}
                  fontSize={{ xs: "12px", md: "18px", lg: "18px" }}
                >
                  {formatedDate(item.createdAt)}
                </Typography>
                <Typography
                  width={"25%"}
                  fontSize={{ xs: "12px", md: "18px", lg: "18px" }}
                >
                  {item.subject}
                </Typography>
                <Typography
                  width={"15%"}
                  fontWeight={700}
                  fontSize={{ xs: "11px", md: "18px", lg: "18px" }}
                  color={
                    item.status === "pending"
                      ? "info"
                      : item.status === "accepted"
                      ? "success"
                      : "error"
                  }
                >
                  {item.status === "pending"
                    ? "waiting Approve Consultation"
                    : item.status === "accepted"
                    ? "Waiting Live Consultation"
                    : "Cancel"}
                </Typography>
                <Typography
                  width={"15%"}
                  align="center"
                  onClick={() => handleOpen(item.id)}
                  sx={{ cursor: "pointer" }}
                  fontSize={{ xs: "12px", md: "18px", lg: "18px" }}
                >
                  <SearchIcon color="info" />
                </Typography>
              </Stack>
            </Box>
          ))}
          <ReservationModal
            open={open}
            handleClose={handleClose}
            reservationId={reservationId}
          />
        </Box>
      </Box>
    </>
  );
};

export default ReservationDataComponent;
