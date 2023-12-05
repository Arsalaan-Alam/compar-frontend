"use client";
import { Button } from "@/components/ui/button";
import { ArConnect } from 'arweavekit/auth';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {

  const [user, setUser] = useState({ loggedIn: null });
  const router = useRouter();

  const AuthedState = () => {
    return (
      <div>
        Connected Successfully! Redirecting...
      </div>
    )
  }

  const UnauthenticatedState = () => {
    return (
      <div>
        <Button onClick={handleConnectWallet}>
          Connect Wallet
        </Button>
        <Button onClick={handleLogin}>
          Sign In with Email
        </Button>
      </div>
    )
  }
  const handleConnectWallet = async () => {
    try {
      // Connect the wallet
      await ArConnect.connect({
        permissions: ["ACCESS_ADDRESS", "SIGN_TRANSACTION"],
        appInfo: {
          name: "CompAR",
          // Add other app information if needed
        },
        // Add other parameters as needed
      });

      // Get the active wallet address after connecting
      const address = await ArConnect.getActiveAddress();
      setUser({ loggedIn: true, address });
      console.log("Connected wallet address:", address);

      const encodedAddress = encodeURIComponent(address);
      const homeAddr = `/home/${encodedAddress}`
      router.push(homeAddr);


    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const handleLogin = () => {
    router.push('/login')
  }
  useEffect(() => {
    // Check if there is a strategy connected
    if (user.loggedIn) {
      console.log("Wallet connected");
      // You can redirect the user to a different page if needed
      // router.push("/dashboard");
    } else {
      console.log("No connected wallet");
    }
  }, [user.loggedIn]);

  return (
    <section
      className="box-border flex items-center justify-center h-screen max-w-[100vw] overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">

            <h1 className="text-8xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">File Management on Arweave <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Made Easy.</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Compress your files easily with our decentralized compression service. Maintain access-control over your files. Save space and maintain the integrity of your data on Arweave.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                {user.loggedIn ? <AuthedState /> : <UnauthenticatedState />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}