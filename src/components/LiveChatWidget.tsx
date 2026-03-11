import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WHATSAPP_NUMBER = "88019000000";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20TekkaBuzz%20Support`;

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-[9999]">
      {isOpen && (
        <div className="mb-3 w-[280px] rounded-2xl border border-border bg-background shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-primary px-3 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle size={16} className="text-primary-foreground" />
              <div>
                <p className="text-xs font-bold text-primary-foreground">Live Support</p>
                <p className="text-[10px] text-primary-foreground/70">We reply within minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages area */}
          <div className="h-[200px] p-3 flex flex-col justify-end gap-3 bg-muted/30">
            <div className="bg-primary/10 border border-primary/20 rounded-xl rounded-bl-sm px-3 py-2 max-w-[85%] self-start">
              <p className="text-xs text-foreground">👋 Welcome to TekkaBuzz! How can we help you today?</p>
              <span className="text-[10px] text-muted-foreground mt-1 block">Support Team • Now</span>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-xl px-3 min-h-[44px] self-start max-w-[85%] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <div>
                <p className="text-xs font-bold">Chat on WhatsApp</p>
                <p className="text-[10px] opacity-80">+880 19000000</p>
              </div>
            </a>
          </div>

          {/* Input */}
          <div className="border-t border-border p-2 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-muted rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary min-h-[44px]"
            />
            <button
              className="bg-primary text-primary-foreground rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-primary/90 transition-colors"
              aria-label="Send message"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-md flex items-center justify-center"
        aria-label={isOpen ? "Close live chat" : "Open live chat"}
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </button>
    </div>
  );
}
