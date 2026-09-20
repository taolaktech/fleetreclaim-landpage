import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fleetreclaim.com"),
  title: "FleetReclaim — Toll & Violation Recovery for Rentals & Fleets",
  description:
    "Match tolls and violations to the right vehicle, trip, renter, guest, or driver. FleetReclaim simplifies expense recovery for Turo and Getaround hosts, private rentals, trucking companies, and commercial fleets.",
  keywords: [
    "Turo toll reimbursement",
    "Turo violation reimbursement",
    "Getaround toll management",
    "rental car toll reconciliation",
    "private car rental expense recovery",
    "fleet toll management",
    "fleet violation management",
    "trucking toll reconciliation",
    "commercial fleet expense recovery",
  ],
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    type: "website",
    url: "https://fleetreclaim.com",
    siteName: "FleetReclaim",
    title: "FleetReclaim — Toll & Violation Recovery for Rentals & Fleets",
    description:
      "Match tolls and violations to the right vehicle, trip, renter, guest, or driver — with the supporting evidence organized for recovery.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FleetReclaim — Toll & Violation Recovery for Rentals & Fleets",
    description:
      "Expense recovery for Turo and Getaround hosts, private rentals, trucking companies, and commercial fleets.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
