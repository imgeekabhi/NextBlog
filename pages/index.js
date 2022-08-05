import FeaturedPosts from "../Components/HomePage/FeaturedPosts";
import { Fragment } from "react";
import Hero from "../Components/HomePage/Hero";
import { getFeaturedPost } from "../lib/posts-util";
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

const HomePage = ({ posts }) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPost();
  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
