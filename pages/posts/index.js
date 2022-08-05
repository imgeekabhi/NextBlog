import React from "react";
import AllPosts from "../../Components/Posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting Started With NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, modi quibusdam consequuntur laudantium iure consectetur, praesentium.",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs2",
//     title: "Getting Started With NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, modi quibusdam consequuntur laudantium iure consectetur, praesentium.",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs3",
//     title: "Getting Started With NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, modi quibusdam consequuntur laudantium iure consectetur, praesentium.",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs4",
//     title: "Getting Started With NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, modi quibusdam consequuntur laudantium iure consectetur, praesentium.",
//     date: "2022-02-10",
//   },
// ];

const AllPostPage = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="Here you will find all programming and web development related posts."
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};
export default AllPostPage;
