"use client";

import { useEffect, useState } from "react";
import { fetchSubnets } from "../lib/fetchSubnets";

export default function SubnetListPanel() {
  const [subnets, setSubnets] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchSubnets();
        setSubnets(data);
      } catch (err) {
        console.error("Failed to load subnets:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div className="absolute top-2 left-2 w-86 h-80 bg-black/70 text-white rounded-lg shadow-lg p-4 overflow-y-auto backdrop-blur-md z-10">
      <h2 className="font-bold text-lg mb-3">Subnets</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {subnets.map((name, idx) => (
            <li
              key={idx}
              className="p-2 bg-white/10 rounded hover:bg-white/20 transition"
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
