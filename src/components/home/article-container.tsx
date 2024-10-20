import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";
import { useGetArticle } from "../../services/hooks/article/use-get-article";
import { useEffect } from "react";

export const ArticleContainer = () => {
  const { data, isLoading } = useGetArticle();
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

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  const navigate = useNavigate();
  const handleClick = (id: number) => () => {
    navigate(`/detailarticle/${id}`);
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
      paddingBlock={5}
    >
      {data?.data?.length !== 0 && data?.data?.map((article) => (
        <Card sx={{
          width: 300,
          height: 390,
          borderWidth: "2px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={article.picture}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {article.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {truncateText(article.content, 100)}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ justifyContent: "end" }}>
            <Button
              size="small"
              color="primary"
              onClick={handleClick(article.id)}
            >
              See more
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
