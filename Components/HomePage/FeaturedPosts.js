import React, { Fragment } from "react";
import PostsGrid from "../Posts/PostsGrid";
import styles from "./FeaturedPosts.module.css";
const FeaturedPosts = ({ posts }) => {
  return (
    <Fragment>
      <section className={styles.latest}>
        <h2>Featured Posts</h2>
        <PostsGrid posts={posts} />
      </section>
    </Fragment>
  );
};

export default FeaturedPosts;
