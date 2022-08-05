import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier) => {
  const postSlug = postIdentifier.replace(/\.md$/, ""); //remove the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();
  const allPost = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  const sortedPosts = allPost.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
};

export const getFeaturedPost = () => {
  const allPost = getAllPosts();
  const featuredPosts = allPost.filter((post) => post.isFeatured);
  return featuredPosts;
};
