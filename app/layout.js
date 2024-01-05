import { Toaster } from "react-hot-toast";
import "./globals.css";
import Footer from "./ui/Footer";
import NavBar from "./ui/NavBar";
import { WiMeteor } from "react-icons/wi";

export const metadata = {
  title: "SyncService - A digital agency company",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
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
