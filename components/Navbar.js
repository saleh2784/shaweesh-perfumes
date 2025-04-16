'use client';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        {/* Logo + Brand */}
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
          <Image
            src="https://scontent.ftlv1-1.fna.fbcdn.net/v/t39.30808-6/302291487_551023133487964_5693618064470031329_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1R4zfUzVXewQ7kNvwFp0_c2&_nc_oc=AdnMv3u4tseoz6SM2nbo35iznT9BFP7NCYRNChvvDdIcC8NT7ge2cxm1yLr1mRfbQx4&_nc_zt=23&_nc_ht=scontent.ftlv1-1.fna&_nc_gid=S_5Bfm2RSRcOva1i0rAZbg&oh=00_AfE2_Y9qq9vjNvO41_fJy6nE5WoRM2yNuMuGnEErwFui6g&oe=68017B11"
            alt="شعار الشاويش"
            width={60}
            height={60}
            className="rounded-circle"
          />
          الشاويش للعطور
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="قائمة التنقل"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link href="/" className="nav-link">الرئيسية</Link>
            </li>
            <li className="nav-item">
              <Link href="/women" className="nav-link">عطور نسائية</Link>
            </li>
            <li className="nav-item">
              <Link href="/men" className="nav-link">عطور رجالية</Link>
            </li>
            <li className="nav-item">
              <Link href="/contactus" className="nav-link">اتصل بنا</Link>
            </li>

            {/* 👤 Authenticated User */}
            {user ? (
            <>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-info fw-bold fs-5"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  👋 مرحباً {user.name || user.email}
                </a>
                <ul className="dropdown-menu dropdown-menu-end text-end">
                  <li><Link href="/profile" className="dropdown-item">الملف الشخصي</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button onClick={handleLogout} className="dropdown-item text-danger">
                      تسجيل الخروج
                    </button>
                  </li>
                </ul>
              </li>

            </>
          ) : (
            <li className="nav-item">
              <Link href="/login" className="nav-link">تسجيل الدخول</Link>
            </li>
          )}
          
          </ul>
        </div>
      </div>
    </nav>
  );
}
