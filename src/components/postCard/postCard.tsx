import styles from "./postCard.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
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
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blog/${post.id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
