import Link from 'next/link';
import styles from '../app/page.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">الرئيسية</Link>
      <Link href="/women">عطور نسائية</Link>
      <Link href="/men">عطور رجالية</Link>
      <Link href="/about">من نحن</Link>
      <Link href="/contact">تواصل معنا</Link>
    </nav>
  );
}

export default Navbar;