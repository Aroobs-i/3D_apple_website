import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html center>
      <div className="relative flex flex-col items-center justify-center">
        {/* Subtle Blue Glow Ring */}
        <div className="w-20 h-20 border-2 border-transparent rounded-full border-t-[#afafaf] border-r-[#afafaf] animate-spin-slow shadow-[0_0_20px_#afafaf]" />

        {/* Clean Futuristic Text */}
        <p className="mt-6 text-[#afafaf] text-sm tracking-[0.25em] uppercase font-light animate-glow">
          Loading
        </p>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 2.8s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 4px #afafaf60, 0 0 10px #afafaf40;
            opacity: 0.7;
          }
          to {
            text-shadow: 0 0 10px #afafaf, 0 0 25px ##afafaf80;
            opacity: 1;
          }
        }
      `}</style>
    </Html>
  )
}

export default Loader
