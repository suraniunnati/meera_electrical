import { useEffect, useState } from "react";

export default function ElectricalLoader() {
const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Automatically hide after 4 seconds
    const timer = setTimeout(() => setIsVisible(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      {/* Container with Perspective to enable 3D effects */}
      <div style={{ perspective: '1200px' }} className="flex flex-col items-center">
        
        {/* The 3D Skewed Bolt Group */}
        <div className="relative transform-gpu skew-x-[-15deg] rotate-y-[20deg] animate-float">
          
          {/* Base Bolt (The 'Shadow' or Housing) */}
          <svg
            viewBox="0 0 24 24"
            className="w-48 h-48 text-red-950 fill-current drop-shadow-[0_0_20px_rgba(153,27,27,0.4)]"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>

          {/* Flowing Layer (The 'Electricity') */}
          <svg
            viewBox="0 0 24 24"
            className="absolute inset-0 w-48 h-48 text-red-500 fill-current animate-surge"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, white, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, white, transparent)',
              maskSize: '100% 200%',
              WebkitMaskSize: '100% 200%',
            }}
          >
            <path d="M13 2L3 14h9l-1 9 10-12h-9l1-9z" />
          </svg>
          
          {/* Neon Glow backdrop */}
          <div className="absolute inset-0 bg-red-600/10 blur-[60px] rounded-full animate-pulse" />
        </div>

        {/* Skewed Bottom Dashed Lines */}
        <div className="mt-6 flex gap-3 transform-gpu skew-x-[-25deg]">
          <div className="h-1.5 w-6 bg-red-900/50 overflow-hidden relative border border-red-500/20">
             <div className="absolute inset-0 bg-red-500 animate-loading-bar-fast" />
          </div>
          <div className="h-1.5 w-24 bg-red-900/50 overflow-hidden relative border border-red-500/20">
             <div className="absolute inset-0 bg-red-500 animate-loading-bar-slow" />
          </div>
          <div className="h-1.5 w-10 bg-red-900/50 overflow-hidden relative border border-red-500/20">
             <div className="absolute inset-0 bg-red-500 animate-loading-bar-fast" />
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes surge {
          0% { mask-position: 50% -100%; -webkit-mask-position: 50% -100%; }
          100% { mask-position: 50% 100%; -webkit-mask-position: 50% 100%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) skewX(-15deg) rotateY(20deg); }
          50% { transform: translateY(-15px) skewX(-12deg) rotateY(25deg); }
        }
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-surge {
          animation: surge 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-loading-bar-fast {
          animation: loading-bar 0.6s linear infinite;
        }
        .animate-loading-bar-slow {
          animation: loading-bar 1.2s linear infinite;
        }
      `}</style>
    </div>
  );
}
