export default function LoadingPackages() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&family=Crimson+Pro:ital,wght@0,400;1,400&display=swap');

        .lp-root {
          min-height: 100vh;
          background: #fff7f0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        /* Soft radial glow behind content */
        .lp-root::before {
          content: '';
          position: absolute;
          width: 500px; height: 500px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(251,113,31,0.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: breathe 4s ease-in-out infinite;
        }
        @keyframes breathe {
          0%, 100% { transform: translate(-50%,-50%) scale(1);   opacity: 0.8; }
          50%       { transform: translate(-50%,-50%) scale(1.1); opacity: 1;   }
        }

        /* Falling petals */
        .lp-petals { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .lp-petal {
          position: absolute;
          width: 7px; height: 12px;
          border-radius: 50% 50% 50% 0;
          opacity: 0;
          animation: fall var(--dur) ease-in var(--delay) infinite;
        }
        @keyframes fall {
          0%   { transform: translateY(-10px) rotate(var(--r)) scale(0.9); opacity: 0; }
          8%   { opacity: 0.55; }
          92%  { opacity: 0.3; }
          100% { transform: translateY(100vh) rotate(calc(var(--r) + 160deg)) scale(0.7); opacity: 0; }
        }

        /* Center */
        .lp-center {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 20px;
        }

        /* OM ring */
        .lp-icon {
          position: relative;
          width: 96px; height: 96px;
          margin-bottom: 28px;
        }
        .lp-ring {
          position: absolute; inset: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(251,113,31,0.3);
          animation: spin 18s linear infinite;
        }
        .lp-ring::before {
          content: '';
          position: absolute;
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #fb711f;
          box-shadow: 0 0 8px rgba(251,113,31,0.9);
          top: -3.5px; left: 50%; transform: translateX(-50%);
        }
        .lp-ring-inner {
          position: absolute; inset: 16px;
          border-radius: 50%;
          border: 1px dashed rgba(251,113,31,0.2);
          animation: spin 12s linear infinite reverse;
        }
        .lp-core {
          position: absolute; inset: 28px;
          border-radius: 50%;
          background: white;
          border: 1.5px solid rgba(251,113,31,0.25);
          box-shadow: 0 4px 24px rgba(251,113,31,0.15), inset 0 1px 0 rgba(255,255,255,0.9);
          display: flex; align-items: center; justify-content: center;
        }
        .lp-om {
          font-family: 'Cinzel', serif;
          font-size: 22px;
          color: #fb711f;
          animation: pulse 3s ease-in-out infinite;
          user-select: none;
          line-height: 1;
        }
        @keyframes spin  { to { transform: rotate(360deg); } }
        @keyframes pulse {
          0%, 100% { opacity: 0.75; }
          50%       { opacity: 1;    }
        }

        /* Text */
        .lp-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.3rem, 3.5vw, 1.75rem);
          font-weight: 500;
          color: #c2440a;
          letter-spacing: 0.1em;
          text-align: center;
          margin-bottom: 4px;
          animation: up 0.8s ease both;
        }
        .lp-sub {
          font-family: 'Crimson Pro', serif;
          font-style: italic;
          font-size: 0.95rem;
          color: rgba(194,68,10,0.55);
          letter-spacing: 0.08em;
          text-align: center;
          margin-bottom: 24px;
          animation: up 0.8s ease 0.1s both;
        }

        /* Divider */
        .lp-divider {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 24px;
          animation: up 0.7s ease 0.2s both;
        }
        .lp-line {
          width: 44px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(251,113,31,0.45));
        }
        .lp-line.r { background: linear-gradient(90deg, rgba(251,113,31,0.45), transparent); }
        .lp-gem { width: 5px; height: 5px; background: #fb711f; transform: rotate(45deg); opacity: 0.6; }

        /* Loading label */
        .lp-label {
          font-family: 'Crimson Pro', serif;
          font-size: 0.68rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(194,68,10,0.4);
          margin-bottom: 20px;
          animation: up 0.7s ease 0.25s both;
        }

        /* Progress bar */
        .lp-bar-wrap {
          width: 160px; height: 2px;
          background: rgba(251,113,31,0.12);
          border-radius: 2px;
          overflow: visible;
          position: relative;
          margin-bottom: 18px;
          animation: up 0.6s ease 0.3s both;
        }
        .lp-bar {
          height: 100%; border-radius: 2px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          box-shadow: 0 0 10px rgba(249,115,22,0.6);
          animation: fill 2.4s cubic-bezier(0.4,0,0.2,1) infinite;
          position: relative;
        }
        .lp-bar::after {
          content: '';
          position: absolute;
          right: -4px; top: -3px;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #f97316;
          box-shadow: 0 0 10px rgba(249,115,22,0.9);
        }
        @keyframes fill {
          0%   { width: 0%;   opacity: 1; }
          72%  { width: 100%; opacity: 1; }
          85%  { width: 100%; opacity: 0; }
          86%  { width: 0%;   opacity: 0; }
          100% { width: 0%;   opacity: 1; }
        }

        /* Dots */
        .lp-dots { display: flex; gap: 7px; animation: up 0.6s ease 0.35s both; }
        .lp-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: rgba(249,115,22,0.35);
          animation: dot 1.5s ease-in-out infinite;
        }
        .lp-dot:nth-child(2) { animation-delay: 0.18s; }
        .lp-dot:nth-child(3) { animation-delay: 0.36s; }
        @keyframes dot {
          0%, 100% { transform: scale(1);    background: rgba(249,115,22,0.3); }
          50%       { transform: scale(1.65); background: #f97316; box-shadow: 0 0 6px rgba(249,115,22,0.7); }
        }

        @keyframes up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="lp-root">

        {/* Petals */}
        <div className="lp-petals">
          {[
            { left:"7%",  dur:"8s",  delay:"0s",   r:"20deg",  bg:"rgba(251,113,31,0.45)" },
            { left:"20%", dur:"10s", delay:"2s",   r:"-15deg", bg:"rgba(251,113,31,0.35)" },
            { left:"35%", dur:"7s",  delay:"4s",   r:"35deg",  bg:"rgba(249,115,22,0.4)"  },
            { left:"52%", dur:"9s",  delay:"1s",   r:"-25deg", bg:"rgba(251,113,31,0.45)" },
            { left:"66%", dur:"11s", delay:"3s",   r:"12deg",  bg:"rgba(252,140,50,0.35)" },
            { left:"78%", dur:"8s",  delay:"5s",   r:"-20deg", bg:"rgba(249,115,22,0.4)"  },
            { left:"90%", dur:"9s",  delay:"1.5s", r:"28deg",  bg:"rgba(251,113,31,0.3)"  },
            { left:"44%", dur:"10s", delay:"6s",   r:"-35deg", bg:"rgba(252,140,50,0.4)"  },
          ].map((p, i) => (
            <div key={i} className="lp-petal" style={{
              left: p.left, top: "-14px",
              background: p.bg,
              ["--dur" as string]: p.dur,
              ["--delay" as string]: p.delay,
              ["--r" as string]: p.r,
            }} />
          ))}
        </div>

        {/* Content */}
        <div className="lp-center">

          <div className="lp-icon">
            <div className="lp-ring" />
            <div className="lp-ring-inner" />
            <div className="lp-core">
              <span className="lp-om">ॐ</span>
            </div>
          </div>

          <h1 className="lp-title">Mathura · Vrindavan</h1>
          <p className="lp-sub">श्री कृष्ण शरणम् मम</p>

          <div className="lp-divider">
            <div className="lp-line" />
            <div className="lp-gem" />
            <div className="lp-line r" />
          </div>

          <p className="lp-label">Preparing your divine journey</p>

          <div className="lp-bar-wrap">
            <div className="lp-bar" />
          </div>

          <div className="lp-dots">
            <div className="lp-dot" />
            <div className="lp-dot" />
            <div className="lp-dot" />
          </div>

        </div>
      </div>
    </>
  );
}