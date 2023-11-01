import styles from "../../styles/catalog.module.css";
import Link from "next/link";
export default function Catalog() {
  return (
    <section className={styles.catalog}>
      <div className={styles.container}>
        <div className={styles.title}>Познакомьтесь с наши ассортиментом</div>
        <div className={styles.header}>
          В нашей линейке есть масла серии ГОСТ и серии Премиум
        </div>

        <div className={styles.flex}>
          <Link href={"/catalog/gost"} className={styles.content}>
            <div className={styles.content_one}></div>
            <span className={styles.content_title}>Масла серии ГОСТ</span>
          </Link>

          <Link href={"/catalog/premium"} className={styles.content}>
            <div className={styles.content_one}></div>
            <span className={styles.content_title}>Масла серии ПРЕМИУМ</span>
          </Link>
        </div> 
      
      </div>

    </section>
  );
}
