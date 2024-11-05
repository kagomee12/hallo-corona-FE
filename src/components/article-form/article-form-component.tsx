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
import { useArticleHook } from "../../hooks/use-article-hook";
import { useGetCategory } from "../../services/hooks/category/use-get-category-hook";
import { useEffect } from "react";

export const ArticleFormComponent = () => {
  const { register, handleSubmit, onSubmit, onError, errors, setValue } =
    useArticleHook();
  const { data, isLoading } = useGetCategory();

  useEffect(() => {
    const loadValue = () => {
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
      loadValue();
    };
  }, [data, isLoading]);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Box
        width={{ xs: "90%", md: "80%", lg: "80%" }}
        margin={"auto"}
        sx={{ padding: "20px" }}
      >
        <Typography
          variant="h4"
          color="#FF6185"
          marginBottom={"30px"}
          fontWeight={700}
        >
          Add Article
        </Typography>
        <Stack spacing={2}>
          <Stack>
            <InputLabel htmlFor="title">Title</InputLabel>
            <TextField
              {...register("title")}
              id="title"
              size="small"
              error={!!errors.title}
              helperText={errors.title ? errors.title.message : null}
              sx={{
                "& .MuiFormHelperText-root": {
                  color: (theme) => theme.palette.error.main,
                },
              }}
            />
          </Stack>
          <Stack>
            <InputLabel htmlFor="picture">Gambar</InputLabel>
            <TextField
              {...register("picture")}
              id="picture"
              type="file"
              onChange={(e) => {
                const input = e.target as HTMLInputElement;
                if (input.files) {
                  return setValue(input.files[0]);
                }
                return null;
              }}
            />
            {errors.picture && (
              <Typography color="red">
                {errors.picture.message as string}
              </Typography>
            )}
          </Stack>
          <Stack>
            <InputLabel htmlFor="category">Category</InputLabel>
            <Select {...register("categoryId")} id="category" size="small">
              {data?.data?.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
              {errors.categoryId && (
                <Typography color="red">
                  {errors.categoryId.message as string}
                </Typography>
              )}
            </Select>
          </Stack>
          <Stack>
            <InputLabel htmlFor="content">Description</InputLabel>
            <TextField
              {...register("content")}
              id="content"
              multiline
              rows={10}
              error={!!errors.content}
              helperText={errors.content ? errors.content.message : null}
              sx={{
                "& .MuiFormHelperText-root": {
                  color: (theme) => theme.palette.error.main,
                },
              }}
            />
          </Stack>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF6185",
              margin: "auto",
              textTransform: "none",
              width: { xs: "100%", md: "20%", lg: "20%" },
              alignSelf: "center",
            }}
            type="submit"
          >
            Post
          </Button>
        </Stack>
      </Box>
    </form>
  );
};
