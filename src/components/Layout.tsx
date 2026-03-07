import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LiveChatWidget from "./LiveChatWidget";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <LiveChatWidget />
    </div>
  );
}
