"use client"
import { useState } from 'react';
import Dots from '../components/dots';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here using email and password
    console.log('Login submitted with:', { email, password });
    // You can add your authentication logic here
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Dots />
      <div className="w-full max-w-xl mx-auto p-8 bg-white rounded shadow-md">
        <h1 className="text-4xl font-extrabold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 p-2 w-full border rounded-md h-12"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 p-2 w-full border rounded-md h-12"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-600 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded font-bold text-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}