import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import NavMob from "./components/NavMob";
import Footer from "./components/Footer";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-syne', // For CSS variable approach
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ASHPULP TEC",
  description: "Generated by create next app",
};

//bg-[]
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased `}
      >
        <div >
        <Navbar/>
          <NavMob/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
