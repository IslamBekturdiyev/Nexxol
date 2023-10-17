import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <Image src="/logo.jpg" alt="nexxol" width={120} height={21.92} />
      </div>

      <ul className="links_ul">
        <Link href={'#about'}>О компании</Link>
        <span>Каталог</span>
        <Link href={'#whywe'}>Почему мы?</Link>
        <Link href={'/contacts'}>Контакты</Link>
      </ul>
    </nav>
  );
}
