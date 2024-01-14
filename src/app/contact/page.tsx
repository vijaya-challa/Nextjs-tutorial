// "use client";

// import dynamic from "next/dynamic";
import styles from "./contact.module.css";
import Image from "next/image";
// import HydrationTest from "../hydrationTest";
// const HydrationTestNoSSR = dynamic(() => import("../hydrationTest"), {
//   ssr: false,
// });

const ContactPage = () => {
  // const a = Math.random();
  // console.log(a);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* <div suppressHydrationWarning>{a}</div> */}
        {/* <HydrationTestNoSSR /> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
