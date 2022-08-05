import Image from "next/image";
import styles from "./PostHeader.module.css";
const PostHeader = ({ title, image }) => {
  console.log(title);
  console.log(image);
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} height={300} width={300} />
    </header>
  );
};

export default PostHeader;
