import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { useReservationHook } from "../../hooks/use-reservation-hook";
import { useNavigate } from "react-router-dom";

export const ReservationConsultaionComponent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const { control, handleSubmit, onSubmit, onError } = useReservationHook();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data), handleClick();
      }, onError)}
    >
      <Box
        width={"60%"}
        margin={"auto"}
        sx={{ padding: "20px" }}
        marginTop={"30px"}
      >
        <Typography
          variant="h4"
          color="#FF6185"
          marginBottom={"30px"}
          fontWeight={700}
        >
          Reservasi Consultaion{" "}
        </Typography>
        <Stack spacing={2}>
          <Stack>
            <InputLabel htmlFor="name">Full Name</InputLabel>
            <Controller
              control={control}
              name="fullname"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <TextField
                    id="name"
                    size="small"
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
            <InputLabel htmlFor="phone">Phone</InputLabel>
            <Controller
              name="phone"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <TextField
                    id="phone"
                    size="small"
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
          <Stack direction={"row"} gap={2}>
            <Stack width={"50%"}>
              <InputLabel htmlFor="birthdate">Born Date</InputLabel>
              <Controller
                name="birthdate"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <>
                    <TextField
                      id="birthdate"
                      size="small"
                      value={value}
                      onChange={onChange}
                      type="date"
                    />
                    {error && (
                      <Typography color="red">{error.message}</Typography>
                    )}
                  </>
                )}
              />
            </Stack>
            <Stack width={"15%"}>
              <InputLabel htmlFor="age">Age</InputLabel>
              <Controller
                name="age"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <>
                    <TextField
                      id="age"
                      size="small"
                      value={value}
                      type="number"
                      onChange={(e) => onChange(parseFloat(e.target.value))}
                    />
                    {error && (
                      <Typography color="red">{error.message}</Typography>
                    )}
                  </>
                )}
              />
            </Stack>
            <Stack width={"15%"}>
              <InputLabel htmlFor="height">Height</InputLabel>
              <Controller
                name="height"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <>
                    <TextField
                      id="height"
                      size="small"
                      value={value}
                      type="number"
                      onChange={(e) => onChange(parseFloat(e.target.value))}
                    />
                    {error && (
                      <Typography color="red">{error.message}</Typography>
                    )}
                  </>
                )}
              />
            </Stack>
            <Stack width={"20%"}>
              <InputLabel htmlFor="weight">Weight</InputLabel>
              <Controller
                name="weight"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <>
                    <TextField
                      id="weight"
                      size="small"
                      value={value}
                      type="number"
                      onChange={(e) => onChange(parseFloat(e.target.value))}
                    />
                    {error && (
                      <Typography color="red">{error.message}</Typography>
                    )}
                  </>
                )}
              />
            </Stack>
          </Stack>
          <Stack>
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <Controller
              name="gender"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <Select
                    labelId="gender"
                    id="gender"
                    size="small"
                    value={value}
                    onChange={onChange}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                  {error && (
                    <Typography color="red">{error.message}</Typography>
                  )}
                </>
              )}
            />
          </Stack>
          <Stack>
            <InputLabel htmlFor="subject">Subject</InputLabel>
            <Controller
              name="subject"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <TextField
                    id="subject"
                    size="small"
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
            <InputLabel htmlFor="consulationDate">
              Live Consultation Date
            </InputLabel>
            <Controller
              name="consultationDate"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <TextField
                    id="consulationDate"
                    size="small"
                    value={value}
                    onChange={onChange}
                    type="datetime-local"
                  />
                  {error && (
                    <Typography color="red">{error.message}</Typography>
                  )}
                </>
              )}
            />
          </Stack>
          <Stack>
            <InputLabel htmlFor="description">Description</InputLabel>
            <Controller
              name="Description"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <TextField
                    id="description"
                    multiline
                    rows={6}
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
            sx={{ backgroundColor: "#FF6185", margin: "auto" }}
            type="submit"
          >
            Send
          </Button>
        </Stack>
      </Box>
    </form>
  );
};
