import { Box, Typography } from "@mui/material";
import { ConsulationComponent } from "../components/consulation/consulation-component";
import { useGetByPatientReservation } from "../services/hooks/reservation/use-get-by-patient-reservaton";

const Consulation = () => {
  const { data, isLoading } = useGetByPatientReservation();
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
  return (
    <Box marginBottom={4}>
      <Typography
        variant="h4"
        color="#FF6185"
        fontWeight={700}
        marginTop={4}

        marginLeft={"20%"}
      >
        Consultation
      </Typography>
      {data!.data.length > 0 &&
        data?.data?.map((item: any) => <ConsulationComponent consultation={item} />)}
    </Box>
  );
};

export default Consulation;
