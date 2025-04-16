'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (!stored) {
      router.push('/login'); // 🔐 Not logged in
    } else {
      setUser(JSON.parse(stored));
    }
  }, []);

  if (!user) return null;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>👤 الملف الشخصي</h1>
      <p><strong>الاسم:</strong> {user.name}</p>
      <p><strong>البريد الإلكتروني:</strong> {user.email}</p>
    </div>
  );
}
