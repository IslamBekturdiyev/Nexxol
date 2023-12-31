import styles from "../../styles/hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_bg}></div>
      <div className={styles.container}>
        <div className={styles.t_cover}>
          <div className={styles.hero_content}>
            <div className={styles.hero_title}>
              <span>NEXXOL</span>
            </div>
            <div className={styles.hero_header}>
              <span>Качество, доступное всем</span>
            </div>
          </div>
        </div>
        <div className={styles.hero_buttom}>
          <Link href={"#about"} className={styles.hero_scroller}>
            <svg
              role="presentation"
              fill="#fff"
              className="t-cover__arrow-svg"
              x="0px"
              y="0px"
              width="38.417px"
              height="18.592px"
              viewBox="0 0 38.417 18.592"
            >
              <g>
                <path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"></path>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
