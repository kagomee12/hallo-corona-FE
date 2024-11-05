import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useRegisterHook } from "../../hooks/use-register-hook";
import { Controller } from "react-hook-form";

interface RegisterModalProps {
  handleCloseRegister: () => void;
  handleOpenLogin: () => void;
  openRegister: boolean;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  handleCloseRegister,
  openRegister,
  handleOpenLogin,
}) => {
  const { control, handleSubmit, onSubmit, error } = useRegisterHook();
  return (
    <Modal
      open={openRegister}
      onClose={handleCloseRegister}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        overflow: "auto",
        maxHeight: "100vh",
      }}
      disableAutoFocus={true}
    >
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          handleCloseRegister();
          handleOpenLogin();
        }, error)}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontSize={24}
            fontWeight={700}
            textAlign={"center"}
          >
            Sign Up
          </Typography>
          <Box>
            <Stack gap={2}>
              <Stack>
                <InputLabel htmlFor="fullname">Nama lengkap</InputLabel>
                <Controller
                  name="fullname"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <TextField
                        variant="outlined"
                        size="small"
                        id="fullname"
                        {...field}
                      />
                      {error && (
                        <Typography color={"red"}>{error.message}</Typography>
                      )}
                    </>
                  )}
                />
              </Stack>
              <Stack>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Controller
                  name="username"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <TextField
                        variant="outlined"
                        size="small"
                        id="fullname"
                        {...field}
                      />
                      {error && (
                        <Typography color={"red"}>{error.message}</Typography>
                      )}
                    </>
                  )}
                />
              </Stack>
              <Stack>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <TextField
                        variant="outlined"
                        size="small"
                        id="fullname"
                        {...field}
                      />
                      {error && (
                        <Typography color={"red"}>{error.message}</Typography>
                      )}
                    </>
                  )}
                />
              </Stack>
              <Stack>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Controller
                  name="password"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <TextField
                        variant="outlined"
                        size="small"
                        id="fullname"
                        type="password"
                        {...field}
                      />
                      {error && (
                        <Typography color={"red"}>{error.message}</Typography>
                      )}
                    </>
                  )}
                />
              </Stack>
              <Stack>
                <InputLabel id="roles">Daftar Sebagai</InputLabel>
                <Controller
                  name="role"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Select
                        labelId="roles"
                        placeholder="Pilih Peran"
                        {...field}
                        size="small"
                        defaultValue={" "}
                      >
                        <MenuItem value=" " disabled>
                          Pilih Peran...
                        </MenuItem>
                        <MenuItem value={"doctor"}>Dokter</MenuItem>
                        <MenuItem value={"patient"}>Pasien</MenuItem>
                      </Select>
                      {error && (
                        <Typography color={"red"}>{error.message}</Typography>
                      )}
                    </>
                  )}
                />
              </Stack>
              <Stack>
                <InputLabel id="gender">Gender</InputLabel>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Select
                        labelId="gender"
                        placeholder="Pilih Peran"
                        {...field}
                        size="small"
                        defaultValue={" "}
                      >
                        <MenuItem value=" " disabled>
                          Pilih Gender...
                        </MenuItem>
                        <MenuItem value={"male"}>laki-laki</MenuItem>
                        <MenuItem value={"female"}>perempuan</MenuItem>
                      </Select>
                      {error && (
                        <Typography color={"red"}>{error.message}</Typography>
                      )}
                    </>
                  )}
                />
              </Stack>
              <Stack>
                <InputLabel htmlFor="phone">No. telepon</InputLabel>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <TextField
                        variant="outlined"
                        size="small"
                        id="phone"
                        {...field}
                      />
                      {error && (
                        <Typography color={"red"}>{error.message}</Typography>
                      )}
                    </>
                  )}
                />
              </Stack>
              <Stack>
                <InputLabel htmlFor="address">Alamat</InputLabel>
                <Controller
                  name="address"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <TextField
                        variant="outlined"
                        size="small"
                        id="address"
                        rows={4}
                        multiline
                        {...field}
                      />
                      {error && (
                        <Typography color={"red"}>{error.message}</Typography>
                      )}
                    </>
                  )}
                />
              </Stack>
              <Button
                variant="contained"
                sx={{
                  marginTop: "20px",
                  textTransform: "none",
                  backgroundColor: "#FF6185",
                  fontSize: "20px",
                }}
                type="submit"
                size="large"
              >
                Sign Up
              </Button>
              <Stack direction="row" justifyContent="center" gap={1}>
                <Typography variant="body2">
                  Already have an account?{" "}
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    color: "#FF6185",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  onClick={() => {
                    handleCloseRegister();
                    handleOpenLogin();
                  }}
                >
                  Login Here
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </form>
    </Modal>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -30%)",
  width: { xs: "75%", md: "450px", lg: "450px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "15px",
};
