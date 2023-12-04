"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const newFile = event.target.files[0];
    setFiles((prevFiles) => [...prevFiles, newFile]);
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
  };

  const handleSubmitClick = () => {
    // Add logic for submission
    console.log("Submitted Files:", files);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const newFile = event.dataTransfer.files[0];
    setFiles((prevFiles) => [...prevFiles, newFile]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    // You can add styling or visual cues to indicate a valid drop target
  };

  const truncateFileName = (fileName, maxLength) => {
    const curlen = fileName.length;
    if (curlen > maxLength) {
      return fileName.substring(0, maxLength * 2/5) + ".........." + fileName.substring(curlen - maxLength*2/5, curlen);
    }
    return fileName;
  };

  return (
    <section
      className="flex items-center justify-center h-screen"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1250" cy="200" r="64" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-8xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Data Compression <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Made Easy.</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Compress your files easily with our decentralized compression service. Save space and maintain the integrity of your data on Arweave.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div className="mb-4 sm:mb-0">
                  {files.length > 0 ? (
                    <div className="bg-gray-100 border rounded p-4 mb-4 min-w-[600px]">
                      {files.map((file, index) => (
                        <div key={index} className="bg-white border rounded p-4 mb-4 flex justify-between items-center">
                          <div>
                            <p className="text-gray-600 text-md text-left">{truncateFileName(file.name, 40)}</p>
                            <p className="text-gray-600 text-md text-left">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                          </div>
                          <button
                            className="text-red-500 hover:text-red-700 ml-16"
                            onClick={() => handleRemoveFile(index)}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <div className="mt-6">
                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 border rounded font-bold mr-4"
                          onClick={handleSubmitClick}
                        >
                          Submit
                        </button>
                        <label
  htmlFor="fileInput"
  className="cursor-pointer bg-orange-300 hover:bg-orange-400 text-white py-2 px-5 border rounded-lg font-bold inline-block"
>
  Add More
</label>
                        <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
                      </div>
                    </div>
                  ) : (
                    <>
                      <label htmlFor="fileInput" className="cursor-pointer bg-orange-300 text-white py-24 px-48 border rounded-lg font-bold block text-2xl">
                        Drag and Drop or Click to Upload
                      </label>
                      <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}