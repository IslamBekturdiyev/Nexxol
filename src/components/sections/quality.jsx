import Image from "next/image";
import styles from "../../styles/quality.module.css";
import Link from "next/link";

export default function Quality() {
  return (
    <section className={styles.quality}>
      <div className="container">
        <div className={styles.quality_content}>
          <div className={styles.quality_right}>
            <p>
              В основе наших продуктов базовые масла высокого качества от
              ведущих производителей России — «ЛУКОЙЛ», «ТАТНЕФТЬ», «РОСНЕФТЬ» и
              др.
            </p>
            <p>
              Чтобы улучшить свойства базовых масел, мы используем присадки
              китайского производства премиального качества.
            </p>
            <p>Блендинг делаем на трех сертифицированных заводах.</p>
          </div>

          <div className={styles.quality_left}>
            <Image
              src={"/about2.jpg"}
              alt="about nexxol"
              width={677}
              height={451}
            />
            <p>Наши специалисты постоянно работают над улучшением характеристик масел</p>
          </div>
        </div>

        <Link href={'/catalog'} className={styles.catalog}>
            <div className={styles.catalog_right}>
                <span>Каталог</span>
                <p>В нашем ассортименте представлено более 30 видов масла для разного назначения</p>
            </div>

            <div className={styles.catalog_left}>
                <Image src={'/about3.jpg'} alt="nexxol catalog" fill/>
            </div>
        </Link>
      </div>
    </section>
  );
}
