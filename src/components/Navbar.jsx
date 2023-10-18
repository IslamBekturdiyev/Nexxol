import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <Image src="/logo.jpg" alt="nexxol" width={120} height={21.92} />
      </div>

      <ul className="links_ul">
        <Link href={"/#about"}>О компании</Link>
        <span className="dropdown">
          Каталог
          <div className="dropdown_icon"></div>
          <div className="tooltip">
            <div className="tooltip_flex">
            <svg
              role="presentation"
              fill="#fff"
              class="t-cover__arrow-svg"
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
              <Link href="/category1">
                Масла серии <br /> ГОСТ
              </Link>
              <Link href="/category2">Масла серии ПРЕМИУМ</Link>
              <Link href="/category3">Все</Link>
            </div>
          </div>
        </span>

        <Link href={"/#whywe"}>Почему мы?</Link>
        <Link href={"/contact"}>Контакты</Link>
      </ul>
    </nav>
  );
}
