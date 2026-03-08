import { ArrowRight } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <aside className="fixed bottom-0 left-0 right-0 z-50 md:hidden" role="complementary" aria-label="Sign up call to action">
      <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-t from-background to-transparent pointer-events-none" aria-hidden="true" />
      <div className="bg-background/95 backdrop-blur-md border-t border-border px-4 py-3">
        <a
          href="/signup"
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-primary-foreground font-bold text-base rounded-xl shadow-lg active:scale-[0.98] transition-transform touch-manipulation"
          title="TekkaBuzz Signup"
          aria-label="Sign up for TekkaBuzz and get bonus"
        >
          <span>Sign Up & Get Bonus</span>
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}

export default StickyMobileCTA;
