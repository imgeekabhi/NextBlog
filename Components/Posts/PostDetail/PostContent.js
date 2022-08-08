import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";
import styles from "./PostContent.module.css";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import Image from "next/image";
// const DUMMY_POSTS = {
//   slug: "getting-started-with-nextjs",
//   title: "Getting Started With NextJS",
//   image: "getting-started-nextjs.png",
//   date: "2022-02-10",
//   content: "# This is first post",
// };

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

const PostContent = ({ post }) => {
  const imagePath = `/Images/Posts/${post.slug}/${post.image}`;

  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/Images/Posts/${post.slug}/${image.src}`}
          alt={image.alt}
          height={300}
          width={600}
        />
      );
    },
    // p(paragraph) {
    //   const { node } = paragraph;
    //   if (node.children[0].tagName === "img") {
    //     const image = node.children[0];
    //     return (
    //       <div className={styles.image}>
    //         <Image
    //           src={`/Images/Posts/${post.slug}/${image.properties.src}`}
    //           alt={image.alt}
    //           height={300}
    //           width={600}
    //         />
    //       </div>
    //     );
    //   }
    // },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };
  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};
export default PostContent;
