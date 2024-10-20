import {
  Box,
  Button,
  InputLabel,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useLoginHook } from "../../hooks/use-login-hook";
import { Controller } from "react-hook-form";

interface LoginModalProps {
  handleCloseLogin: () => void;
  handleOpenRegister: () => void;
  openLogin: boolean;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  openLogin,
  handleCloseLogin,
  handleOpenRegister,
}) => {
  const { control, handleSubmit, onSubmit, onError } = useLoginHook();

  return (
    <Modal
      open={openLogin}
      onClose={handleCloseLogin}
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
          handleCloseLogin();
        }, onError)}
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
            Sign In
          </Typography>
          <Box>
            <Stack gap={2}>
              <Stack>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Controller
                  control={control}
                  name="username"
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <>
                      <TextField
                        variant="outlined"
                        size="small"
                        id="email"
                        value={value}
                        onChange={onChange}
                      />
                      {error && (
                        <Typography color="red">{error.message}</Typography>
                      )}
                    </>
                  )}
                />
              </Stack>
              <Stack>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Controller
                  control={control}
                  name="password"
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <>
                      <TextField
                        variant="outlined"
                        size="small"
                        id="password"
                        value={value}
                        onChange={onChange}
                      />
                      {error && (
                        <Typography color="red">{error.message}</Typography>
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
                Sign In
              </Button>
              <Stack direction="row" justifyContent="center" gap={1}>
                <Typography variant="body2">Don't have account? </Typography>
                <Typography
                  variant="body2"
                  style={{
                    color: "#FF6185",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  onClick={() => {
                    handleCloseLogin();
                    handleOpenRegister();
                  }}
                >
                  Register Here
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
  transform: "translate(-50%, -50%)",
  width: "450px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "15px",
};
