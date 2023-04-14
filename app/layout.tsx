import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: "Airbnb | Holiday Homes & Apartment Rentals",
  description:
    "Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Airbnb Clone.",
};

const font = Manrope({
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
