import React, { Fragment } from "react";
import Logo from "./Logo";
import Link from "next/link";
import styles from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <Link href={`/`}>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={`/posts`}>Posts</Link>
          </li>
          <li>
            <Link href={`/contact`}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
