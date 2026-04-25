'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from 'react';

export default function Home() {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore(score + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Web3 Clicker Game</h1>
        <p className="text-gray-600 mb-6">Connect your wallet and start clicking to earn points!</p>

        <div className="mb-6">
          <ConnectButton />
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Score: {score}</h2>
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-xl transition-colors duration-200"
          >
            Click Me!
          </button>
        </div>

        <p className="text-sm text-gray-500">
          This is a demo web3 game. Connect your wallet to get started.
        </p>
      </div>
    </div>
  );
}
