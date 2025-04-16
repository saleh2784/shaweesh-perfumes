'use client';
import { useState, useEffect } from 'react'; // ✅ Added useEffect
import { useRouter } from 'next/navigation';

const router = useRouter();

useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  if (!user || user.email !== 'admin@gmail.com') {
    alert('🔒 Access denied. Admins only.');
    router.push('/login');
  }
}, []);


export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ✅ Redirect to home if already logged in
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      router.push('/');
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('allUsers') || '[]');
    const match = users.find((u: any) => u.email === email && u.password === password);

    if (!match) {
      alert('❌ البريد الإلكتروني أو كلمة المرور غير صحيحة');
      return;
    }

    // ✅ Save full user (with name if available)
    localStorage.setItem('user', JSON.stringify({ email }));
    alert('✅ تم تسجيل الدخول بنجاح');
    window.location.href = '/';
  };

  return (
    <main style={{ maxWidth: '400px', margin: '4rem auto', padding: '2rem', border: '1px solid #ddd', borderRadius: '12px' }}>
      <h2 style={{ textAlign: 'center' }}>تسجيل الدخول</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '0.6rem', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: '0.6rem', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#d81b60',
            color: '#fff',
            padding: '0.8rem',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          تسجيل الدخول
        </button>
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          ليس لديك حساب؟{' '}
          <a href="/register" style={{ color: '#d81b60', fontWeight: 'bold' }}>
            سجل الآن
          </a>
        </p>
      </form>
    </main>
  );
}
