// Navbar.tsx
import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar = ({ someID, current }) => {
  const router = useRouter();

  return (
    <nav className="mt-8 text-center">
      <ul className="flex justify-center">
        <li className={`mr-20 cursor-pointer text-xl font-bold ${current === 1 ? 'text-blue-500' : ''}`} onClick={() => router.push(`/home/${someID}`)}>My Files</li>
        <li className={`mr-20 cursor-pointer text-xl font-bold ${current === 2 ? 'text-blue-500' : ''}`} onClick={() => router.push('/shared-files')}>Shared Files</li>
        <li className={`mr-20 cursor-pointer text-xl font-bold ${current === 3 ? 'text-blue-500' : ''}`} onClick={() => router.push(`/upload/${someID}`)}>Upload Files</li>
      </ul>
    </nav>
  );
};

export default Navbar;
