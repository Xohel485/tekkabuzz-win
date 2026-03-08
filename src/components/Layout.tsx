import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LiveChatWidget from "./LiveChatWidget";
import MobileBottomNav from "./MobileBottomNav";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pb-14 lg:pb-0">{children}</main>
      <Footer />
      <LiveChatWidget />
      <MobileBottomNav />
    </div>
  );
}
