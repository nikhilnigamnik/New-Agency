import { Toaster } from "react-hot-toast";
import "./globals.css";
import Footer from "./ui/Footer";
import NavBar from "./ui/NavBar";
import { WiMeteor } from "react-icons/wi";

export const metadata = {
  title: "Nikhil Nigam - Full Stack Developer",
  description: "My personal portfolio showcasing my works",
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
