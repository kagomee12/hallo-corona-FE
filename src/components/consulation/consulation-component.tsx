import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Reservation } from "../../types/store";
import { formatedDate } from "../../utils/formatted-data";
import { useFindUser } from "../../services/hooks/user/use-find-user";
import { useGetUserMe } from "../../hooks/use-get-user-me";

interface IConsulationComponentProps {
  consultation: Reservation;
}
export const ConsulationComponent: React.FC<IConsulationComponentProps> = ({
  consultation,
}) => {
  const { data } = useFindUser(consultation.doctorId?.toString() ?? "0");
  const { data: user } = useGetUserMe();

  return (
    <Box width={"60%"} margin={"auto"}>
      <Box
        width={"100%"}
        borderRadius={4}
        boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.2)"}
        borderBottom={"1px solid #E0E0E0"}
        marginTop={3}
      >
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          p={3}
          borderBottom={"1px solid #E0E0E0"}
        >
          <Box width={"10%"}>
            <Avatar sx={{ width: 50, height: 50 }} src={user?.profilePic}/>
          </Box>
          <Stack width={"80%"}>
            <Typography fontWeight={600}>{consultation.Description}</Typography>
            <Typography fontSize={14} fontWeight={400} color="#6C6C6C">
              {formatedDate(consultation.createdAt)}
            </Typography>
            <Typography fontSize={14} fontWeight={400} color="#6C6C6C">
              keluhan: {consultation.subject}
            </Typography>
          </Stack>
          <Typography
            alignSelf={"start"}
            justifyContent={"end"}
            width={"10%"}
            color={"#6C6C6C"}
          >
            {formatedDate(consultation.consultationDate)}
          </Typography>
        </Stack>
        {consultation.message ? (
          <Stack
            direction={"row"}
            spacing={2}
            alignItems={"center"}
            p={3}
            borderBottom={"1px solid #E0E0E0"}
            width={"80%"}
            margin={"auto"}
          >
            <Box width={"10%"}>
              <Avatar
                sx={{ width: 50, height: 50 }}
                src={data?.data.profilePic}
              />
            </Box>
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Stack>
                <Typography fontSize={14} fontWeight={400} color="#6C6C6C">
                  {consultation.message}
                </Typography>
                <Typography fontSize={14} fontWeight={600}>
                  {data?.data.fullname}
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  color={
                    consultation.status === "accepted" ? "success" : "error"
                  }
                >
                  {consultation.status}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        ) : (
          <Stack
            width={"60%"}
            alignItems={"center"}
            justifyContent={"center"}
            margin={"auto"}
            py={4}
          >
            <Typography fontWeight={600} color="#6C6C6C">
              Waiting for Reply
            </Typography>
          </Stack>
        )}
      </Box>
    </Box>
  );
};
