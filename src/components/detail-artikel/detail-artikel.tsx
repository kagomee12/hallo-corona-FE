import { Box, Typography } from "@mui/material";
import { useFindArticle } from "../../services/hooks/article/use-find-article";
import { useEffect } from "react";
import { formatedDate } from "../../utils/formatted-data";

interface DetailArtikelProps {
  id: number;
}
export const DetailArtikelComponent: React.FC<DetailArtikelProps> = ({
  id,
}) => {
  const { data, isLoading } = useFindArticle(id);

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
  }, [isLoading]);

  return (
    <Box
      width={"80%"}
      marginLeft={"auto"}
      marginRight={"auto"}
      marginTop={"30px"}
    >
      <Typography fontWeight={700} fontSize={"24px"}>
        {data?.data?.title}
      </Typography>
      <Typography fontSize={"14px"} fontWeight={400} color={"#6C6C6C"}>
        {formatedDate(data?.data?.createdAt!)}
      </Typography>
      <Box display={"flex"} flexDirection={"row"} gap={1}>
        <Typography fontSize={"14px"} fontWeight={400} color={"#6C6C6C"}>
          Author:
        </Typography>
        <Typography fontSize={"14px"} fontWeight={400} color={"#FF6185"}>
          {data?.data?.author?.username}
        </Typography>
      </Box>
      <Box
        width={"100%"}
        boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.2)"}
        display={"flex"}
        flexDirection={"column"}
        paddingTop={5}
        paddingBottom={5}
        gap={3}
        marginBottom={5}
        height={"max-content"}
      >
        <Box
          width={"85%"}
          display={"flex"}
          justifyContent={"center"}
          margin={"auto"}
        >
          <img src={data?.data?.picture} width={"100%"} />
        </Box>
        <Box width={"85%"} margin={"auto"} display={"flex"}>
          <Typography>{data?.data?.content}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
