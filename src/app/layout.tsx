import type { Metadata } from "next";
import { Inter, Poppins, League_Gothic } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });
const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["300", "600", "900"],
  variable: "--font-poppins",
});
const leage_gothic_init = League_Gothic({
  subsets: ["latin"],

  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`  ${poppins_init.variable} ${leage_gothic_init.variable} `}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
