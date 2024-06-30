'use client'

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Waiting for message...")

  const fetchData = async () => {
    const data = await fetch('http://localhost:8000/test/');
    const text = await data.text();
    setMessage(text);
  }

  const resetData = () => {
    setMessage("Waiting for message...")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <div className="flex flex-row">
          <button className="my-8 mx-4 px-16 py-4 rounded-md bg-gray-600" onClick={fetchData}>Get Message</button>
          <button className="my-8 mx-4 px-16 py-4 rounded-md bg-gray-600" onClick={resetData}>Reset Message</button>
        </div>
        <p>{message}</p>
      </div>
    </main>
  );
}
