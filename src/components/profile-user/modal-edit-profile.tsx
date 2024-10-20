import {
  Box,
  Modal,
  Typography,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import { useUpdateUser } from "../../services/hooks/user/use-update-user";
import { useGetUserMe } from "../../hooks/use-get-user-me";

interface IModalEditProfileProps {
  open: boolean;
  handleClose?: () => void;
  pidture?: string;
}
export const ModalEditProfile: React.FC<IModalEditProfileProps> = ({
  open,
  handleClose,
  pidture,
}) => {
  const { data, isLoading } = useGetUserMe();

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
    )
  }

  const { mutateAsync } = useUpdateUser(data ? data?.id.toString() : "");
  const [image, setImage] = React.useState<any>(null);
  const handleProfile = (event: any) => {
    setImage(event.target.files[0]);
  };
  const onSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("profilePic", image);
    mutateAsync(formData);
    handleClose
  };
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
        <form
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            fontWeight={700}
            color="#FF6185"
            textAlign="center"
          >
            Edit Profile
          </Typography>
          <Box
            display={"flex"}
            gap={10}
            width={"100%"}
            justifyContent={"center"}
            flexDirection={"row"}
          >
            <Box width={"40%"}>
              <img src={pidture ? pidture : 'https://res.cloudinary.com/dq1pow2vn/image/upload/v1729420742/examplearticles_h3jamd.jpg'} width={"100%"} />
            </Box>
            <Box width={"60%"} display={"flex"} flexDirection={"column"}>
              <Box display={"flex"} flexDirection={"column"} flex={1} gap={2}>
                <InputLabel htmlFor="pidture">Ubah Gambar Profil</InputLabel>
                <TextField
                  id="pidture"
                  type="file"
                  variant="standard"
                  name="profilePic"
                  onChange={handleProfile}
                />
              </Box>
              <Box
                display={"flex"}
                alignSelf={"end"}
                margin={"auto"}
                width={"100%"}
                gap={4}
                flex={1}
              >
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleClose}
                  sx={{ marginTop: "auto", marginBottom: "auto" }}
                  size="large"
                >
                  Batal
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ marginTop: "auto", marginBottom: "auto" }}
                  size="large"
                  onClick={(data) =>{
                    onSubmit(data); 
                    handleClose?.();
                  }}
                >
                  Simpan
                </Button>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  overFlow: "auto",
  borderRadius: "15px",
};
