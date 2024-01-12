import Image from "next/image";
import styles from "./about.module.css";

const aboutPage = () => {
  return (
    <div className={styles.imgContainer}>
      <Image
        src="https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg"
        alt=""
        fill
      />
    </div>
  );
};

export default aboutPage;
