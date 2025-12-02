"use client";

import React from "react";

export default function BackgroundAnimation() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
      >
        <div className="absolute -left-24 -top-24 w-[48rem] h-[48rem] rounded-full blur-3xl opacity-70 animate-blob" />
        <div className="absolute right-[-8rem] top-[-6rem] w-[36rem] h-[36rem] rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000" />
        <div className="absolute left-1/3 bottom-[-12rem] w-[40rem] h-[40rem] rounded-full blur-3xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      <style jsx>{`
        .animate-blob {
          background: radial-gradient(circle at 30% 30%, rgba(79, 70, 229, 0.55), rgba(99,102,241,0.35) 40%, transparent 60%),
            radial-gradient(circle at 70% 70%, rgba(236, 72, 153, 0.35), rgba(253, 224, 71, 0.2) 40%, transparent 60%);
          animation: blob 9s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes blob {
          0% {
            transform: translateY(0) scale(1);
          }
          33% {
            transform: translateY(-3rem) translateX(3rem) scale(1.08);
          }
          66% {
            transform: translateY(2rem) translateX(-2rem) scale(0.96);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}
