import Image from "next/image";
import styles from "./singlePost.module.css";
const SlugPage = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1703762929639-16360d03c730?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.unsplash.com/photo-1703762929639-16360d03c730?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailtext}>
            <span className={styles.detaiTitle}>Author</span>
            <span className={styles.detailvalue}>Vijaya Challa</span>
          </div>
          <div className={styles.detailtext}>
            <span className={styles.detaiTitle}>Published</span>
            <span className={styles.detailvalue}>13.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a quidem
          enim tenetur reprehenderit accusantium asperiores, ipsa atque quos
          beatae.
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
