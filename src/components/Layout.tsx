import { ReactNode, lazy, Suspense } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LiveChatWidget = lazy(() => import("./LiveChatWidget"));
const MobileBottomNav = lazy(() => import("./MobileBottomNav"));

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pb-14 lg:pb-0">{children}</main>
      <Footer />
      <Suspense fallback={null}>
        <LiveChatWidget />
        <MobileBottomNav />
      </Suspense>
    </div>
  );
}
