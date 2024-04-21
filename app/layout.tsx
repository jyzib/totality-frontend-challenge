import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster"
import {Navbar} from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import GlobelProvider from './GlobelProvider'
import Footer from "./components/Footer";
export const metadata: Metadata = {
  title: "Homely Hub - Rent Your Dream Home",
  description: "Find your perfect rental property with Homely Hub, the premier platform for discovering homes tailored to your lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang='en'>

      <body className="">
<GlobelProvider>
      <Navbar/>
      <div className="mx-2 md:mx-10 ">
        {children}
        </div>
        <Footer/>
        <Toaster />
</GlobelProvider>
        </body>
    </html>
   </ClerkProvider> 
  );
}
