import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  { q: "What is Taka Buzz or Tekka Buzz?", a: "Taka Buzz and Tekka Buzz are popular search terms referring to TekkaBuzz -- Bangladesh's official online gaming platform at tekkabuzz.win. Also searched as tkkabuzz, takkabuzz, teekabuzz, tekkabaz, taka buzz, takka buzz -- all pointing to the same official site." },
  { q: "What is TkkaBuzz?", a: "TkkaBuzz is a common spelling variant of TekkaBuzz. Players searching for tkkabuzz, takkabuzz, takkabuz, or takkbuzz will find the same official TekkaBuzz platform at tekkabuzz.win." },
  { q: "How to login TekkaBuzz (Tekk Buzz Login)?", a: "Visit tekkabuzz.win and click Login. Enter your registered mobile number and password. Also searched as tekk buzz login, tekka buzz login, or teka buzz login." },
  { q: "What is TekkaBaz or TakkaBuzz?", a: "TekkaBaz and TakkaBuzz are alternative spellings of TekkaBuzz. All these variations refer to the same official platform at tekkabuzz.win." },
  { q: "What games does TekkaBuzz offer?", a: "TekkaBuzz offers live casino, sports betting, 1000+ slots, crash games (Aviator, JetX), fishing games, lottery, arcade, and table games from 50+ top providers." },
  { q: "How to deposit on TekkaBuzz?", a: "TekkaBuzz supports bKash, Nagad, Rocket, Upay, TAP, SureCash, iPay, OkWallet, bank card, and cryptocurrency. Minimum deposit 200 Taka." },
  { q: "What is TekkaBuzz Affiliate Program?", a: "The tekka buzz affiliate / tekkabuzz affiliate program pays 300 Taka per referral. Visit tekkabuzz.win/affiliate for details." },
  { q: "Is TekkaBuzz same as Taka Alliance Gaming?", a: "Taka Alliance Gaming is a search term associated with TekkaBuzz. TekkaBuzz is Bangladesh's official online gaming platform, and taka alliance gaming searches lead to the same platform." },
];

export default function FaqSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Frequently Asked Questions About <span className="text-primary">TekkaBuzz</span>
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
              <AccordionTrigger className="text-foreground font-medium text-left hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
