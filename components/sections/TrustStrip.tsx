import { trustItems } from "@/lib/data";

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="trust-strip-inner">
        {trustItems.map((item, i) => (
          <div key={i} style={{ display: "contents" }}>
            <div className="trust-item">
              <div className="trust-icon">{item.icon}</div>
              <span>{item.label}</span>
            </div>
            {i < trustItems.length - 1 && (
              <div className="trust-divider" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
