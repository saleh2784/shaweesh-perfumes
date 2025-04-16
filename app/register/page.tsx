'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [name, setName] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // get saved users or empty array
    const users = JSON.parse(localStorage.getItem('allUsers') || '[]');

    // check if email already exists
    const exists = users.find((u: any) => u.email === email);
    if (exists) {
      alert('⚠️ هذا البريد مستخدم مسبقًا');
      return;
    }

    // check password match
    if (password !== confirm) {
      alert('❌ كلمة المرور غير متطابقة');
      return;
    }

    // create and save new user
    const newUser = { email, password, name };
    const updatedUsers = [...users, newUser];
    localStorage.setItem('allUsers', JSON.stringify(updatedUsers));

    // log them in automatically
    localStorage.setItem('user', JSON.stringify({ email }));

    alert('✅ تم إنشاء الحساب بنجاح');
    router.push('/login'); // redirect to homepage
  };

  return (
    <main style={{ maxWidth: '400px', margin: '4rem auto', padding: '2rem', border: '1px solid #ddd', borderRadius: '12px' }}>
      <h2 style={{ textAlign: 'center' }}>تسجيل حساب جديد</h2>
      <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
            type="text"
            placeholder="الاسم الكامل"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ padding: '0.6rem', borderRadius: '8px', border: '1px solid #ccc' }}
            />
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
        <input
          type="password"
          placeholder="تأكيد كلمة المرور"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
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
          إنشاء الحساب
        </button>
      </form>
    </main>
  );
}
