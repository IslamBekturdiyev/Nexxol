"use client";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ResponsiveNav({ open, closeMenu }) {
  const [state, setState] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setState(!state);
  }



  return (
    <>
      {open && (
        <div className={styles.menu_container}>
          <div className={styles.btn_close} onClick={closeMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>

          <ul className={styles.links_ul}>
            <Link href={"/#about"}>О компании</Link>

            <span className={styles.dropdown} onClick={handleClick}>Каталог</span>
            <div className={styles.tooltip}>
              {state && (
                <div className={styles.tooltip_flex}>
                  <Link
                    href="/catalog/gost"
                    className={pathname == "/catalog/gost" ? "active_link" : ""}
                  >
                    Масла серии ГОСТ
                  </Link>
                  <Link
                    href="/catalog/premium"
                    className={
                      pathname == "/catalog/premium" ? "active_link" : ""
                    }
                  >
                    Масла серии ПРЕМИУМ
                  </Link>
                  <Link
                    href="/catalog"
                    className={pathname == "/catalog" ? "active_link" : ""}
                  >
                    Все
                  </Link>
                </div>
              )}
            </div>

            <Link href={"/#whywe"}>Почему мы?</Link>
            <Link href={"/contact"}>Контакты</Link>
          </ul>
        </div>
      )}
    </>
  );
}
