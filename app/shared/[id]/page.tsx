"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/app/components/navbar';
import Dots from "@/app/components/dots";


// Home component
const Home = ({ params }) => {
  const router = useRouter();

  // Sample files data for the table
  const sampleFiles = [
    { name: 'File 1', size: '1 MB', timestamp: '2023-01-01 10:00:00', sharedBy: '0xdgdsfsdo83209ndsfkcs19A' },
    { name: 'File 2', size: '500 KB', timestamp: '2023-01-02 12:30:00', sharedBy: '0xdgdsfsdo83209ndsfkcs19A' },
    { name: 'File 3', size: '2 MB', timestamp: '2023-01-03 15:45:00', sharedBy: '0xdgdsfsdo83209ndsfkcs19A' },
  ];

  const encodedAddress = encodeURIComponent(params.id);

  const handleViewClick = (file) => {
    // Add logic for viewing the file
    console.log(`Viewing file: ${file.name}`);
  };

  return (
    <div className="text-center">
      {/* Use the Navbar component */}
      <Navbar someID={encodedAddress} current={2}/>

      <Dots />

      {/* Greeting and Wallet Address */}
      <div className="mb-16 mt-24">
        <h1 className="text-8xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Files Shared with Me</span>
        </h1>
      </div>

      {/* Table with Sample Files */}
      <div className="w-full max-w-screen-lg mx-auto">
        <table className="w-full border-collapse mb-4 bg-white text-black">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3 px-5">File Name</th>
              <th className="border p-3 px-5">File Size</th>
              <th className="border p-3 px-5">Timestamp</th>
              <th className="border p-3 px-5">Shared By</th>
              <th className="border p-3 px-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sampleFiles.map((file, index) => (
              <tr key={index} className="border">
                <td className="border p-2 px-5">{file.name}</td>
                <td className="border p-2">{file.size}</td>
                <td className="border p-2">{file.timestamp}</td>
                <td className="border p-2 px-5">{file.sharedBy}</td>
                <td className="border p-2">
                  <button className="bg-blue-400 hover:bg-blue-500 text-white py-1 px-5 rounded font-bold" onClick={() => handleViewClick(file)}>
                    View File
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
