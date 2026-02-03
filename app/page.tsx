import css from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={css.main}>
      <div className={css.section}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.subtitle}>
          Reliable and budget-friendly rentals for any journey
        </p>
        {/* <button className={css.button}>
          <Link href="/catalog" className={css.link}>
            View Catalog
          </Link>
        </button> */}
        <Link href="/catalog" className={css.link}>
          <button className={css.button}>View Catalog</button>
        </Link>
      </div>
    </main>
  );
}
