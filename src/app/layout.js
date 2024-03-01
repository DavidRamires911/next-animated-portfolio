import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navbar";
import TransitionProvider from "@/components/transitionProvider";
import '../app/globals.css'




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dc-portfolio",
  description: "My Animated Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider> 
        {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
