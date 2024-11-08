import { Box, Typography } from "@mui/material";
import { BannerHome } from "../components/home/banner-home";
import { ArticleContainer } from "../components/home/article-container";

const Home = () => {
  return (
    <Box flexDirection={"column"} flex={1} display={"flex"} height={"100vh"}>
      <Box flex={3} display={"flex"}>
        <BannerHome />
      </Box>
      <Box
        flex={6}
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        margin={"auto"}
      >
        <Typography
          color="#FF6185"
          fontWeight={700}
          padding={4}
          sx={{ fontSize: { xs: "24px", md: "48px", lg: "48px" } }}
        >
          Artikel Hari ini
        </Typography>
        <ArticleContainer />
      </Box>
    </Box>
  );
};

export default Home;
