import styles from "../../styles/about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.about_content}>
          <div className={styles.about_right}>
            <span className={styles.about_title}>О компании</span>
            <div className={styles.about_header}>
              NEXXOL — <br /> производитель <br /> масел и техжидкостей
            </div>
            <p>
              Наша компания входит в холдинг KSVK. Это группа предприятий
              России, одно из направлений которой — производство и сбыт
              смазочных материалов. Благодаря этому у NEXXOL мощная база с
              современным оборудованием, техникой и специалистами высокого
              уровня. Мы контролируем все процессы производства и обеспечиваем
              высокое качество продукции.
            </p>
          </div>

          <div className={styles.about_left}>
            <Image
              src={"/about.jpg"}
              alt="about nexxol"
              width={654}
              height={656}
            />
            <p>Главный офис холдинга KSVK в деловом центре «Кантри Парк»</p>
          </div>
        </div>

        <div className={styles.about_banner}>
          <Image
            src={"/bg-title.png"}
            alt="nexxol title"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto"}}
            
          />
          <p>
            Наша главная цель – обеспечить рынок <br /> качественными маслами
            уровня <br /> топ-игроков рынка, но за меньшую цену
          </p>
        </div>
      </div>
    </section>
  );
}
