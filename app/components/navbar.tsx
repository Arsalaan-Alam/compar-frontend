// Navbar.tsx
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArConnect } from 'arweavekit/auth';

const Navbar = ({ someID, current }) => {
  const router = useRouter();

  const handleLogout = async () => {
    await ArConnect.disconnect(); // Disconnect Arweave wallet
    router.push('/'); // Redirect to home
  };

  return (
    <nav className="mt-8 text-center">
      <ul className="flex justify-center">
        <li className={`mr-20 cursor-pointer text-xl font-bold ${current === 1 ? 'text-blue-500' : ''}`} onClick={() => router.push(`/home/${someID}`)}>My Files</li>
        <li className={`mr-20 cursor-pointer text-xl font-bold ${current === 2 ? 'text-blue-500' : ''}`} onClick={() => router.push(`/shared/${someID}`)}>Shared Files</li>
        <li className={`mr-20 cursor-pointer text-xl font-bold ${current === 3 ? 'text-blue-500' : ''}`} onClick={() => router.push(`/upload/${someID}`)}>Upload Files</li>
        <li className={`mr-20 cursor-pointer text-xl font-bold ${current === 4 ? 'text-blue-500' : ''}`} onClick={() => router.push(`/upload/${someID}`)}>My Account</li>
        <li className="cursor-pointer text-xl font-bold text-red-500" onClick={handleLogout}>Logout</li>
      </ul>
    </nav>
  );
};

export default Navbar;
