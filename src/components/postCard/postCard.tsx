import styles from "./postCard.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.unsplash.com/photo-1703762929639-16360d03c730?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>13.01.2024</span>
      </div>

      <div className={styles.bottom}>
        <h1>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          aspernatur quibusdam iusto amet asperiores vitae qui culpa, quod, quam
          officiis nulla placeat nam tempora repellat fuga modi eius sit ut.
          Quas, repellat? Ipsum nihil molestias nostrum iure autem ea dolorum?
        </p>
        <Link href="/blog/post" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
