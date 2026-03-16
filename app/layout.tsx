import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Classes Jodhpur | IIT-JEE · NEET-UG · Foundation",
  description:
    "31+ years of shaping Rajasthan's brightest minds for IIT-JEE, NEET-UG, and national competitive exams. Rooted in Jodhpur. Proven across India.",
  keywords:
    "Apex Classes Jodhpur, IIT JEE coaching Jodhpur, NEET coaching Jodhpur, best coaching Rajasthan, foundation classes Jodhpur",
  openGraph: {
    title: "Apex Classes Jodhpur | Blossom the Seeds",
    description:
      "31+ years of excellence · 54 IIT/NEET selections in 2024 · Jodhpur's most trusted coaching institute.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
