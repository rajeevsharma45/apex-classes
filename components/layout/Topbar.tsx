export default function Topbar() {
  return (
    <>
      <style>{`
        .topbar-wrap {
          background-color: #0f3b27;
          width: 100%;
          min-height: 44px;
          display: flex;
          align-items: center;
        }
        .topbar-inner {
          width: 100%;
          margin: 0 auto;
          padding: 10px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          font-family: "Outfit", "Segoe UI", Arial, sans-serif;
          font-size: 12.5px;
        }
        .topbar-left {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .topbar-right {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .topbar-text {
          color: rgba(255, 255, 255, 0.68);
        }
        .topbar-link {
          color: rgba(255, 255, 255, 0.78);
          text-decoration: none;
          transition: color 0.18s;
        }
        .topbar-link:hover {
          color: #ffffff;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .topbar-left { display: none; }
          .topbar-inner { justify-content: center; }
          .topbar-right { justify-content: center; gap: 16px; }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .topbar-inner { padding: 10px 20px; gap: 8px; }
          .topbar-left  { gap: 14px; }
          .topbar-right { gap: 16px; }
          .topbar-text, .topbar-link { font-size: 11.5px; }
        }
      `}</style>

      <div className="topbar-wrap">
        <div className="topbar-inner">

          {/* Left — contact info */}
          <div className="topbar-left">
            <span className="topbar-text">
              📍 3/9, K.B.H. Road, Jodhpur, Rajasthan
            </span>
            <a href="tel:+919414132063" className="topbar-link">
              📞 +91 94141 32063
            </a>
            <a href="mailto:apexclassesjdh@gmail.com" className="topbar-link">
              ✉ apexclassesjdh@gmail.com
            </a>
          </div>

          {/* Right — quick links */}
          <div className="topbar-right">
            <a href="/results"        className="topbar-link">Results 2024</a>
            <a href="/study-material" className="topbar-link">Free Study Material</a>
            <a href="/student-zone"   className="topbar-link">Student Zone</a>
          </div>

        </div>
      </div>
    </>
  );
}