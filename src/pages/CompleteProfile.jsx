// src/pages/CompleteProfile.jsx
import { useState } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

export default function CompleteProfile() {
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getToken();
    await fetch('https://your-backend.com/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, favoriteColor: color }),
    });
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Complete Your Profile</h2>
      <div>
        <label>Name:</label>
        <input value={name} onChange={e => setName(e.target.value)} className="border p-2" required />
      </div>
      <div>
        <label>Favorite Color:</label>
        <input value={color} onChange={e => setColor(e.target.value)} className="border p-2" required />
      </div>
      <button type="submit" className="px-4 py-2 bg-green-500 text-white">Save</button>
    </form>
  );
}
