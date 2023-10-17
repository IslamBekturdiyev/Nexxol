import styles from "@/styles/whyus.module.css";
import Image from "next/image";

export default function Whyus() {
  return (
    <section className={styles.whyus} id="whywe">
      <div className="container">
        <div className={styles.whywe_title}>Почему выбирают нас</div>
        <div className={styles.whywe_header}>
          Чтобы предлагать клиентам лучшую цену, мы оптимизировали процессы:
        </div>

        <div className={styles.figures}>
          <div className={styles.figures_content}>
            <div className={styles.span}></div>
            <div className={styles.flex_figures}>
              <div>
                <Image src={"/number-bg.png"} alt="whywe nexxol" fill />
                <span>1</span>
              </div>
            </div>
          </div>

          <div className={styles.figures_content}>
            <div className={styles.span}></div>
            <div className={styles.flex_figures}>
              <div>
                <Image src={"/number-bg.png"} alt="whywe nexxol" fill />
                <span>2</span>
              </div>
            </div>
          </div>

          <div className={styles.figures_content}>
            <div className={styles.span}></div>
            <div className={styles.flex_figures}>
              <div>
                <Image src={"/number-bg.png"} alt="whywe nexxol" fill />
                <span>3</span>
              </div>
            </div>
          </div>

          <div className={styles.figures_content}>
            <div className={styles.span}></div>
            <div className={styles.flex_figures}>
              <div>
                <Image src={"/number-bg.png"} alt="whywe nexxol" fill />
                <span>4</span>
              </div>
            </div>
          </div>

          <div className={styles.span}></div>
        </div>

        <div className={styles.figures_texts}>
          <div>Разработали оптимальные рецептуры продуктов</div>
          <div>Наладили крупные оптовые поставки сырья</div>
          <div>Оптимизировали ассортимент</div>
          <div>Выстроили эффективную логистику</div>
        </div>

        <div className={styles.oil_flex}>
          <div className={styles.oil_right}>
            <Image
              src={"/why-us.png"}
              alt="nexxol oil"
              width={637}
              height={470}
            />
          </div>

          <div className={styles.oil_left}>
            <Image
              src={"/why-us2.png"}
              alt="bg-oil nexxol"
              fill
              style={{ top: "-100px" }}
            />
            <div>
              Мы <br /> разливаем наши <br /> масла в тару <br /> большого
              объема. <br /> Это тоже помогает <br />
              снизить цену <br /> продукции и сделать <br /> контракт с NEXXOL{" "}
              <br /> выгодным для наших <br /> клиентов.
            </div>
          </div>
        </div>

        <div className={styles.quality_content}>
          <div className={styles.quality_right}>
            <p>
              Мы хорошо понимаем, как важно качество масел. И хотим, чтобы
              каждый клиент убедился лично — с нашими маслами техника станет
              работать стабильно и прослужит долго. А у каждого механизма будет
              высокий запас прочности.
            </p>
            <p>
              Чтобы обеспечить такое качество продукции, мы используем присадки
              китайского производства премиального качества и закупаем масла
              повышенной очистки — третью группу базовых масел.
            </p>
          </div>

          <div className={styles.quality_left}>
            <Image
              src={"/why-us3.jpg"}
              alt="about nexxol"
              width={654}
              height={491}
            />
          </div>
        </div>

        <div className={styles.choose_us}>
          <div className={styles.choose_content}>
            <Image
              src={"/number-bg.png"}
              alt="nexxol choose us"
              width={73}
              height={84}
            />
            <p>
              Выбирая NEXXOL, вы получите то же качество, которое гарантируют
              бренды с мировым именем, но по меньшей цене. У нас большой
              ассортимент — значит, вы точно найдете смазочные материалы под
              свои задачи и бюджет
            </p>
          </div>

          <div className={styles.choose_content}>
            <Image
              src={"/number-bg.png"}
              alt="nexxol choose us"
              width={73}
              height={84}
            />
            <p>
              Наши специалисты помогут подобрать масла, которые наилучшим
              образом подойдут вашей технике — с учетом условий эксплуатации и
              индивидуальных требований
            </p>
          </div>

          <div className={styles.choose_content}>
            <Image
              src={"/number-bg.png"}
              alt="nexxol choose us"
              width={73}
              height={84}
            />
            <p>
              Мы гарантируем: <br /> • оперативность менеджеров <br /> •
              контроль каждой партии масла <br /> • доставка и отгрузка без
              задержек
            </p>
          </div>
        </div>
      </div>

      <div className={styles.about_banner}>
        <Image
          src={"/effectiveness.png"}
          alt="nexxol title"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <p>
          Эффективность, оптимизация, <br /> экономия, контроль и качество — <br />
          <span>5 важных правил NEXXOL</span>
        </p>
      </div>

        <div className="container">
            <div className={styles.effectiveness_bottom}>Даже в рамках ограниченного бюджета можно получить смазочные материалы высокого качества и обеспечить стабильную работу техники — если обратиться в NEXXOL. Мы разработали свой продукт таким образом, чтобы бескомпромиссно соответствовать требованиям ГОСТ и оставаться доступным по цене</div>
        </div>

    </section>
  );
}
