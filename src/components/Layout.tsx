import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Ticker from "./Ticker";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Ticker />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
