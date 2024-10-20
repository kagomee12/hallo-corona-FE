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
        width={"80%"}
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
              paddingTop: "20px",
              paddingBottom: "20px",
              borderBottom: "1px solid #E0E0E0",
              paddingLeft: "20px",
            }}
          >
            <Stack direction="row" alignItems={"start"}>
              <Typography width={"25%"} fontWeight={700}>
                Name
              </Typography>
              <Typography width={"20%"} fontWeight={700}>
                Date
              </Typography>
              <Typography width={"25%"} fontWeight={700}>
                Subject
              </Typography>
              <Typography width={"15%"} fontWeight={700}>
                Status
              </Typography>
              <Typography width={"15%"} align="center">
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
                paddingLeft: "20px",
              }}
            >
              <Stack direction="row" justifyContent="center">
                <Typography width={"25%"}>{item.fullname}</Typography>
                <Typography width={"20%"}>
                  {formatedDate(item.createdAt)}
                </Typography>
                <Typography width={"25%"}>{item.subject}</Typography>
                <Typography
                  width={"15%"}
                  fontWeight={700}
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
