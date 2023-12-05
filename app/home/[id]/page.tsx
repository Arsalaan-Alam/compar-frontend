"use client"

import { useRouter } from 'next/navigation';
import Navbar from '@/app/components/navbar';
import Dots from '@/app/components/dots';

// Home component
const Home = ({ params }) => {
  const router = useRouter();

  // Sample files data for the table
  const sampleFiles = [
    { name: 'File 1', size: '1 MB', timestamp: '2023-01-01 10:00:00' },
    { name: 'File 2', size: '500 KB', timestamp: '2023-01-02 12:30:00' },
    { name: 'File 3', size: '2 MB', timestamp: '2023-01-03 15:45:00' },
  ];

  const encodedAddress = encodeURIComponent(params.id);

  const handleViewClick = (file) => {
    // Add logic for viewing the file
    console.log(`Viewing file: ${file.name}`);
  };

  const handleManageAccessClick = (file) => {
    // Add logic for managing access to the file
    console.log(`Managing access for file: ${file.name}`);
  };

  return (
    <div className="text-center">

      <Navbar someID={encodedAddress} current={1} />
      <Dots />


      <div className="max-w-6xl mx-auto mb-16 mt-24">
        <h1 className="text-8xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">My Files</span>
        </h1>
        
      </div>

      {/* Table with Sample Files */}
      <div className="w-full max-w-screen-lg min mx-auto">
        <table className="w-full border-collapse mb-4 bg-white text-black">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">File Name</th>
              <th className="border p-2">File Size</th>
              <th className="border p-2">Timestamp</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sampleFiles.map((file, index) => (
              <tr key={index} className="border">
                <td className="border p-2">{file.name}</td>
                <td className="border p-2">{file.size}</td>
                <td className="border p-2">{file.timestamp}</td>
                <td className="border p-2 flex justify-center">
  <button className="bg-blue-400 hover:bg-blue-500 text-white py-1 px-3 rounded font-bold" onClick={() => handleViewClick(file)}>
    View File
  </button>
  <button className="bg-blue-400 hover:bg-blue-500 text-white py-1 px-3 rounded font-bold ml-2" onClick={() => handleManageAccessClick(file)}>
    Manage Access
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
