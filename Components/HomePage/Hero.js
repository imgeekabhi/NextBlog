import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import Avatar from "../../public/Images/Site/avatar.png";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src={Avatar}
          height={`300px`}
          width={`300px`}
          alt={`avatar`}
        ></Image>
      </div>
      <h1>Hi, I'm Abhishek</h1>
      <p>
        I blog about web development - especially frontend libraries and
        frameworks like ReactJS and NextJS.
      </p>
    </section>
  );
};

export default Hero;
