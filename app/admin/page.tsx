'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();
  const [users, setUsers] = useState<any[]>([]);
  const [logs, setLogs] = useState<any[]>([]);

  // 🔐 Admin protection
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user || user.email !== 'admin@gmail.com') {
      alert('🔒 Access denied. Admins only.');
      router.push('/login');
    }
  }, []);

  // Load users + logs
  useEffect(() => {
    const all = localStorage.getItem('allUsers');
    const loginLogs = localStorage.getItem('loginLogs');
    if (all) setUsers(JSON.parse(all));
    if (loginLogs) setLogs(JSON.parse(loginLogs));
  }, []);

  // 🗑️ Delete single user
  const handleDelete = (email: string) => {
    const updated = users.filter((u) => u.email !== email);
    localStorage.setItem('allUsers', JSON.stringify(updated));
    setUsers(updated);
  };

  // ➕ Add or update user
  const handleAddUser = () => {
    const email = prompt("Enter user's email:");
    const name = prompt("Enter name:");
    const password = prompt("Enter password:");

    if (!email || !name || !password) return;

    const updated = [...users.filter((u) => u.email !== email), { email, name, password }];
    localStorage.setItem('allUsers', JSON.stringify(updated));
    setUsers(updated);
    alert('✅ User added or updated.');
  };

  // ⬇️ Export to CSV
  const exportCSV = () => {
    const header = ['Name', 'Email', 'Password'];
    const rows = users.map((u) => [u.name, u.email, u.password]);
    const csv = [header, ...rows].map((row) => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'users.csv';
    link.click();
  };

  // 🔒 Admin logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  // 🔑 Password reset (manual)
  const resetPassword = (email: string) => {
    const newPass = prompt('Enter new password for: ' + email);
    if (!newPass) return;

    const updated = users.map((u) => u.email === email ? { ...u, password: newPass } : u);
    localStorage.setItem('allUsers', JSON.stringify(updated));
    setUsers(updated);
    alert('✅ Password reset!');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
      <h2>🛠️ Admin Panel</h2>

      {/* Toolbar */}
      <div style={{ marginBottom: '1.5rem' }}>
        <button onClick={handleLogout} style={btn('gray')}>🔓 Logout</button>
        <button onClick={handleAddUser} style={btn('green')}>➕ Add/Update User</button>
        <button onClick={exportCSV} style={btn('blue')}>📥 Export CSV</button>
      </div>

      {/* User Table */}
      <h3>👥 Registered Users</h3>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#eee' }}>
              <th style={cell}>#</th>
              <th style={cell}>Name</th>
              <th style={cell}>Email</th>
              <th style={cell}>Password</th>
              <th style={cell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={u.email}>
                <td style={cell}>{i + 1}</td>
                <td style={cell}>{u.name}</td>
                <td style={cell}>{u.email}</td>
                <td style={cell}>{u.password}</td>
                <td style={cell}>
                  <button onClick={() => resetPassword(u.email)} style={miniBtn('goldenrod')}>Reset</button>
                  <button onClick={() => handleDelete(u.email)} style={miniBtn('crimson')}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Login Logs */}
      <h3 style={{ marginTop: '3rem' }}>📜 Login Logs</h3>
      {logs.length === 0 ? (
        <p>No login history found.</p>
      ) : (
        <ul>
          {logs.slice().reverse().map((log, i) => (
            <li key={i}>{log.email} → {log.time}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const btn = (color: string) => ({
  backgroundColor: color,
  color: '#fff',
  padding: '0.6rem 1.2rem',
  marginRight: '0.8rem',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
});

const miniBtn = (color: string) => ({
  backgroundColor: color,
  color: '#fff',
  border: 'none',
  padding: '4px 10px',
  borderRadius: '6px',
  marginLeft: '5px',
  cursor: 'pointer',
});

const cell = {
  border: '1px solid #ccc',
  padding: '8px',
  textAlign: 'center' as const,
};
