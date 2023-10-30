
import MapCompany from "../../components/Map";
import styles from "../../styles/contact.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <section className={styles.contact}>
      <div className={styles.contact_flex}>
        <div className={styles.contact_map}>
          <MapCompany />
        </div>

        <div className={styles.contact_rightContent}>
          <div className={styles.contact_title}>
            <strong>NEXXOL – Делаем качество доступным!</strong>
            <br />
            ООО «НЕКССОЛ РУС»
            <br />
            141407, Московская область, г. Химки,
            <br />
            ул. Панфилова, вл. 21, стр. 1, эт. 5, пом. 0501
            <br />
            <Link href={"/"}>8-800-600-54-94</Link>
            <br />
            <Link href={"/"}>info@nexxolrus.com</Link>
          </div>
          <div className={styles.contact_descr}>
            Позвоните нам или напишите — ответим на все вопросы и подготовим
            выгодное предложение.
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.form_title}>Есть вопрос?</div>
        <div className={styles.form_header}>Напишите нам! Наш специалист свяжется с</div>
        <div className={styles.form_header}>вами, ответит на вопросы.</div>

        <div className={styles.form}>
          <div>
            <label htmlFor="name">Имя</label>
            <input type="text" id="name" placeholder="Ваше имя" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Ваш электронный адрес почты"
            />
          </div>

          <div>
            <label htmlFor="phone">Телефон</label>
            <input type="number" id="phone" placeholder="+998 ( ) ___ __ __" />
          </div>

          <div>
            <label htmlFor="message">Введите ваш вопрос</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Введите ваш вопрос"
            ></textarea>
          </div>

          <button role="submit" className={styles.submit_btn}>
            Отправить
          </button>

          <p>Нажимая кнопку “Отправить”, вы соглашаетесь с Политикой конфиденциальности.</p>
        </div>
      </div>
    </section>
  );
}
