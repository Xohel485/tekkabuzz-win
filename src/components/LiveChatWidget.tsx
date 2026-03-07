import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      {isOpen && (
        <div className="mb-3 w-[320px] rounded-2xl border border-border bg-background shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-primary px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle size={18} className="text-primary-foreground" />
              <div>
                <p className="text-sm font-bold text-primary-foreground">Live Support</p>
                <p className="text-[10px] text-primary-foreground/70">We reply within minutes</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground">
              <X size={18} />
            </button>
          </div>

          {/* Messages area */}
          <div className="h-[260px] p-4 flex flex-col justify-end gap-3 bg-muted/30">
            <div className="bg-primary/10 border border-primary/20 rounded-xl rounded-bl-sm px-3 py-2 max-w-[85%] self-start">
              <p className="text-xs text-foreground">👋 Welcome to TekkaBuzz! How can we help you today?</p>
              <span className="text-[10px] text-muted-foreground mt-1 block">Support Team • Now</span>
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-muted rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground rounded-lg p-2 hover:bg-primary/90 transition-colors">
              <Send size={14} />
            </button>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-transform flex items-center justify-center relative"
        aria-label="Open live chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
        )}
      </button>
    </div>
  );
}
