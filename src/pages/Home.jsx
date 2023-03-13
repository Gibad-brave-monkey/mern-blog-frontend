import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";

import { Post } from "../components/Post";
import { TagsBlock } from "../components/TagsBlock";
import { CommentsBlock } from "../components/CommentsBlock";
import { fetchPost, fetchTags } from "../redux/slices/posts";

export const Home = () => {
  const dispatch = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);

  const isPostsLoading = posts.status === "loading";
  const isTagsLoading = tags.status === "loading";

  React.useEffect(() => {
    dispatch(fetchPost());
    dispatch(fetchTags());
  }, []);

  return (
    <>
      <Tabs
        style={{ marginBottom: 15 }}
        value={0}
        aria-label="basic tabs example"
      >
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, idx) =>
            isPostsLoading ? (
              <Post key={idx} isLoading={true} />
            ) : (
              <Post
                id={obj._id}
                title={obj.title}
                imageUrl={
                  "data:image/jpeg;base64,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"
                }
                user={obj.user}
                createdAt={obj.createdAt}
                viewsCount={obj.viewsCount}
                commentsCount={3}
                tags={obj.tags}
                isEditable
              />
            )
          )}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={tags.items} isLoading={isTagsLoading} />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: "Вася Пупкин",
                  avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                },
                text: "Это тестовый комментарий",
              },
              {
                user: {
                  fullName: "Иван Иванов",
                  avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                },
                text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  );
};
