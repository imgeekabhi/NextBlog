import PostContent from "../../Components/Posts/PostDetail/PostContent";
import { getPostData } from "../../lib/posts-util";
import { getPostsFiles } from "../../lib/posts-util";
const PostDetailPage = ({ post }) => {
  return (
    <>
      <PostContent post={post} />
    </>
  );
};

export const getStaticPaths = () => {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};
export default PostDetailPage;
