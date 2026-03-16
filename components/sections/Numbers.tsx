import Link from "next/link";
import { numbersStats, resultRows } from "@/lib/data";

const delays = ["", "delay-1", "delay-2", "delay-3"];

export default function Numbers() {
  return (
    <section className="numbers-section">
      <div className="numbers-bg" />

      <div className="numbers-inner">

        {/* Left */}
        <div>
          <div className="numbers-section-label reveal">Our Legacy</div>

          <h2 className="numbers-title reveal">
            Numbers That<br />Speak for Us
          </h2>

          <p className="numbers-desc reveal">
            Decades of discipline, mentorship, and proven methodology —
            translated into ranks, seats, and careers that define futures.
          </p>

          <div className="stats-grid">
            {numbersStats.map((stat, i) => (
              <div key={stat.label} className={`stat-card reveal ${delays[i]}`}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="results-list">
          <p className="results-label reveal">Recent Results</p>

          {resultRows.map((row, i) => (
            <div key={row.exam} className={`result-row reveal ${delays[i]}`}>
              <div>
                <div className="result-exam">{row.exam}</div>
                <div className="result-year">{row.year}</div>
              </div>
              <div>
                <div className="result-count">{row.count}</div>
                <div className="result-unit">{row.unit}</div>
              </div>
            </div>
          ))}

          <Link href="/results" className="results-cta-btn reveal">
            View Full Results Gallery →
          </Link>
        </div>

      </div>
    </section>
  );
}
