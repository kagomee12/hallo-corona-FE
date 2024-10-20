import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
import { useReplyReservationHook } from "../../hooks/use-reply-reservation-hook";
import { formatedDate } from "../../utils/formatted-data";
import { useFindReservation } from "../../services/hooks/reservation/use-find-reservation";

interface IReservationModalProps {
  open: boolean;
  handleClose?: () => void;
  reservationId: number;
}
export const ReservationModal: React.FC<IReservationModalProps> = ({
  handleClose,
  open,
  reservationId,
}) => {
  const { data, isLoading } = useFindReservation(reservationId);
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
  const { control, handleSubmit, onSubmit, onError, onSubmitCancel } =
    useReplyReservationHook(reservationId.toString());
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        overflow: "auto",
      }}
    >
      <Box sx={style}>
        <Stack>
          <Stack direction="row" spacing={5} p={5}>
            <Box width={"70%"}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                fontWeight={700}
              >
                {data?.data?.Description}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {data?.data?.subject}
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"start"}
              gap={2}
              width={"30%"}
            >
              <img
                src="https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420751/icon-consultan_vu9z1y.png"
                alt="icon-consultan"
                height={"45%"}
              />
              <Stack spacing={2}>
                <Stack>
                  <Typography fontWeight={700}>Date of Complaint</Typography>
                  <Typography>
                    {formatedDate(data?.data?.createdAt ?? new Date())}
                  </Typography>
                </Stack>
                <Stack>
                  <Typography fontWeight={700}>Live Consultation</Typography>
                  <Typography>
                    {formatedDate(data?.data?.consultationDate ?? new Date())}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Stack>
          <Stack>
            <Stack
              direction="row"
              borderBottom={"1px solid #E0E0E0"}
              width={"90%"}
              margin={"auto"}
              py={2}
            >
              <Typography width={"5%"} fontWeight={700}>
                No
              </Typography>
              <Typography width={"20%"} fontWeight={700}>
                Full Name
              </Typography>
              <Typography width={"20%"} fontWeight={700}>
                Phone
              </Typography>
              <Typography width={"15%"} fontWeight={700}>
                Gender
              </Typography>
              <Typography width={"10%"} fontWeight={700}>
                Age
              </Typography>
              <Typography width={"15%"} fontWeight={700}>
                Height
              </Typography>
              <Typography width={"15%"} fontWeight={700}>
                Weight
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              borderBottom={"1px solid #E0E0E0"}
              width={"90%"}
              margin={"auto"}
              py={1}
            >
              <Typography width={"5%"}>1</Typography>
              <Typography width={"20%"}>{data?.data?.fullname}</Typography>
              <Typography width={"20%"}>{data?.data?.phone}</Typography>
              <Typography width={"15%"}>{data?.data?.gender}</Typography>
              <Typography width={"10%"}>{data?.data?.age}</Typography>
              <Typography width={"15%"}>{data?.data?.height}</Typography>
              <Typography width={"15%"}>{data?.data?.weight}</Typography>
            </Stack>
            <Stack p={4}>
              <Typography fontWeight={700}>Give Response</Typography>
              <Controller
                name="message"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <TextField multiline rows={4} fullWidth {...field} />
                    {error && <Typography>{error.message}</Typography>}
                  </>
                )}
              />
            </Stack>
          </Stack>
          <Box
            justifyContent={"end"}
            alignItems={"end"}
            gap={2}
            display={"flex"}
            px={4}
            py={1}
          >
            <Button
              variant="contained"
              color="error"
              onClick={handleSubmit((data) => {
                onSubmitCancel(data);
                handleClose;
              }, onError)}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="success"
              onClick={handleSubmit((data) => {
                onSubmit(data);
                handleClose;
              }, onError)}
            >
              Approve
            </Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};

const style = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  overFlow: "auto",
};
