import css from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.headerSection}>
        <Link href="/">
          <svg width={104} height={16}>
            <use href="/logoSvg.svg#Logo"></use>
          </svg>
        </Link>
        <nav>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link href="/" className={css.navLink}>
                Home
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href="/catalog" className={css.navLink}>
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
