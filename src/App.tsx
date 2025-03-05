import React, { useState } from 'react';
import { Plus } from 'lucide-react';

function App() {
  const [number, setNumber] = useState<number>(0);
  const result = number + 3;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          <Plus className="w-6 h-6" />
          Number Adder
        </h1>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
              Enter a number:
            </label>
            <input
              type="number"
              id="number"
              value={number}
              onChange={(e) => setNumber(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-gray-700">
              {number} + 3 = <span className="font-bold text-blue-600">{result}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;