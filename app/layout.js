"use client";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Footer from "./ui/Footer";
import NavBar from "./ui/NavBar";
import { WiMeteor } from "react-icons/wi";
import ClarityContainer from "./components/ClarityContainer";
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>SyncService - A digital agency company</title>
      </head>
      <body className="relative">
        <ClarityContainer projectId={"kz5pyv8z7k"}></ClarityContainer>
        <NavBar />
        {children}
        <Footer />
        <WiMeteor className="w-56 h-56 opacity-10 blur-sm top-20 absolute -z-10 rounded-full " />
        <WiMeteor className="w-56 h-56 opacity-10 blur-sm top-20 right-20 absolute -z-10 rounded-full " />
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
