import Image from "next/image";
import Link from "next/link";
import styles from "../styles/hero.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer_container}>
          <div className={styles.footer_content}>
            <div className={styles.footer_one}>
              <Image src={"/logo.jpg"} alt="nexxol" width={121} height={29} />
              <p>
                ООО «НЕКСОЛ РУС» <br /> 141407, Московская область, г. <br /> Химки,
                ул. Панфилова, вл. 21, стр. 1
              </p>
            </div>

            <div className={styles.footer_two}>
              <Link href={"/"}>Главная</Link>
              <Link href={"/#about"}>О компании</Link>
              <Link href={"/#whywe"}>Почему мы</Link>
            </div>

            <div className={styles.footer_three}>
              <Link href={"/catalog"}>Каталог</Link>
              <Link href={"/catalog/gost"}>Масла серии ГОСТ</Link>
              <Link href={"/catalog/premium"}>Масла серии ПРЕМИУМ</Link>
            </div>

            <div className={styles.footer_four}>
              <Link href={"/contact"}>Контакты</Link>
            </div>

            <div className={styles.footer_five}>
              <Link href={"/"}>8-800-600-54-94</Link>
              <Link href={"/"}>info@nexxolrus.com</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
