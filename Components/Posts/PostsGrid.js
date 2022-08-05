import React from "react";
import PostItem from "./PostItem";
import styles from "./PostsGrid.module.css";
const PostsGrid = ({ posts }) => {
  // console.log(posts);
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
