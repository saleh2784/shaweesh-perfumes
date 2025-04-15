import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
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
