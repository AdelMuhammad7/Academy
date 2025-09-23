"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isClient]);

  if (!isClient || loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 z-50 flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="relative w-32 h-32">
            <motion.div
              className="absolute inset-0 border-4 border-gray-400 rounded-full"
              animate={{ rotateY: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 border-4 border-gray-300 rounded-full"
              animate={{ rotateX: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-8 bg-gradient-to-r from-gray-200 to-white rounded-full"
              animate={{ scale: [1, 1.2, 1], rotateZ: 360 }}
              transition={{
                scale: { duration: 2, repeat: Infinity },
                rotateZ: { duration: 6, repeat: Infinity, ease: "linear" },
              }}
            />
          </div>

          {isClient &&
            [...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-white rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  marginLeft: "-0.5rem",
                  marginTop: "-0.5rem",
                }}
                animate={{
                  x: [0, Math.cos((i * Math.PI) / 4) * 48, 0],
                  y: [0, Math.sin((i * Math.PI) / 4) * 48, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
        </motion.div>

        <div className="w-80 h-3 bg-gray-600 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-gray-300 to-white rounded-full relative"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute right-0 top-0 w-4 h-3 bg-gray-200 rounded-full"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        </div>

        <div className="flex space-x-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-6 h-6 bg-gradient-to-r from-gray-300 to-white rounded-full"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
