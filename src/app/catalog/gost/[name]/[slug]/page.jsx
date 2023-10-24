import Link from "next/link";
import styles from "../../../../../styles/detail.module.css";
import Data from "../../../../../data/products";
import Image from "next/image";

export default function Page({ params: { slug } }) {
  const spesific = Data[slug];

  return (
    <section className={styles.detail}>
      <div className="container">
        <div className={styles.ghost_history}>
          <Link href={"/"}>ГЛАВНАЯ</Link>/<Link href={"/catalog"}>КАТАЛОГ</Link>
          /<Link href={"/catalog/gost"}>МАСЛА СЕРИИ ГОСТ</Link>/
          <Link href={`/catalog/gost/${spesific.parent_link}`}>
            {spesific.parent_title}
          </Link>
          /
          <Link href={`/catalog/gost/${spesific.title}`}>{spesific.title}</Link>
          /
        </div>
      </div>

      <div className={styles.product_parent}>
        <span>{spesific.parent}</span>
      </div>
      <div className="container">
        
        <div className={styles.flex_product}>
          <div className={styles.right_product}>
            <div className={styles.product_title}>{spesific.title}</div>
            <span>{spesific.little}</span>

            <div className={styles.certificate}>Спецификации</div>
            <span>{spesific.sertificate}</span>
          </div>

          <div className={styles.left_side}>
          </div>
        </div>

        <div className={styles.detail_body}>

          <div className={styles.detail_info}>
            <span>Описание</span>
            <div className={styles.detail_body_text}>
              {spesific.about[0]}
            </div>
            <div className={styles.detail_body_text}>
              {spesific.about[1]}
            </div>
          </div>

          <div className={styles.features}>
            <span>Преимущества</span>
            <div className={styles.features_body}>
              {spesific.features[0]}
              <br />
              {spesific.features[1]}
              <br />
              {spesific.features[2]}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
