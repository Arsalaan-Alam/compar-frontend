"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const [fileToCompress, setFileToCompress] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileToCompress(file);
  };

  const handleCancelClick = () => {
    setFileToCompress(null);
  };

  const handleSubmitClick = () => {
    console.log("File submitted:", fileToCompress);
    // Add logic for submission
  };

  const handleDrop = (event) => {
    event.preventDefault();

    // Get the position of the drop
    const dropX = event.clientX;
    const dropY = event.clientY;

    // Get the position and dimensions of the label
    const label = document.getElementById("fileLabel");
    const labelRect = label.getBoundingClientRect();

    // Check if the drop occurred within the label's boundaries
    if (
      dropX >= labelRect.left &&
      dropX <= labelRect.right &&
      dropY >= labelRect.top &&
      dropY <= labelRect.bottom
    ) {
      const file = event.dataTransfer.files[0];
      setFileToCompress(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    // Add styling or visual cues to indicate a valid drop target
  };

  return (
    <section className="flex items-center justify-center h-screen">
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
                <div className="mb-4 sm:mb-0" onDrop={handleDrop} onDragOver={handleDragOver}>
                  {fileToCompress ? (
                    <>
                      <p className="text-gray-600 text-md">Selected File: {fileToCompress.name}</p>
                      <p className="text-gray-600 text-md">File Size: {(fileToCompress.size / (1024 * 1024)).toFixed(2)} MB</p>
                      <div className="mt-6">
                        <button
                          className="bg-transparent hover:bg-blue-500 text-blue-600 hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded font-bold mr-2"
                          onClick={handleCancelClick}
                        >
                          Cancel
                        </button>
                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 border rounded font-bold"
                          onClick={handleSubmitClick}
                        >
                          Submit
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <label
        htmlFor="fileInput"
        id="fileLabel"  // Add an ID to the label for easy access
        className="cursor-pointer bg-orange-300 text-white py-24 px-48 border rounded-lg font-bold block text-2xl"
      >
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