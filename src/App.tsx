import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";
import RedirectPage from "@/components/RedirectPage";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("@/pages/Home"));
const Casino = lazy(() => import("@/pages/Casino"));
const Sports = lazy(() => import("@/pages/Sports"));
const Slots = lazy(() => import("@/pages/Slots"));
const Crash = lazy(() => import("@/pages/Crash"));
const Fishing = lazy(() => import("@/pages/Fishing"));
const Lottery = lazy(() => import("@/pages/Lottery"));
const Arcade = lazy(() => import("@/pages/Arcade"));
const TableGames = lazy(() => import("@/pages/Table"));
const Affiliate = lazy(() => import("@/pages/Affiliate"));
const Referral = lazy(() => import("@/pages/Referral"));
const VIP = lazy(() => import("@/pages/VIP"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Terms = lazy(() => import("@/pages/Terms"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const ResponsibleGaming = lazy(() => import("@/pages/ResponsibleGaming"));
const Blog = lazy(() => import("@/pages/Blog"));
const Promotion = lazy(() => import("@/pages/Promotion"));
const WelcomeBonus = lazy(() => import("@/pages/bonuses/Welcome"));
const CashbackBonus = lazy(() => import("@/pages/bonuses/Cashback"));
const ReferralBonus = lazy(() => import("@/pages/bonuses/Referral"));
const TaskBonus = lazy(() => import("@/pages/bonuses/Task"));

const BlogPages = lazy(() => import("@/pages/blog/AllBlogPages"));

const D2_URL = "https://tekkabuzz.cc";
const D3_URL = "https://tekkabuzz.com";
const BASE_KW = "taka buzz, tekka buzz, tekkabuzz, tkkabuzz, tekkabaz, takkabuzz, takka buzz, tekabuzz, teka buzz, teekabuzz, tekk buzz, takkabuz, takkbuzz, online casino bangladesh, taka alliance gaming";

const queryClient = new QueryClient();

function BlogRoute({ component: Component }: { component: React.ComponentType }) {
  return <Component />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/casino" element={<Casino />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/slots" element={<Slots />} />
              <Route path="/crash" element={<Crash />} />
              <Route path="/fishing" element={<Fishing />} />
              <Route path="/lottery" element={<Lottery />} />
              <Route path="/arcade" element={<Arcade />} />
              <Route path="/table" element={<TableGames />} />
              <Route path="/affiliate" element={<Affiliate />} />
              <Route path="/referral" element={<Referral />} />
              <Route path="/vip" element={<VIP />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/responsible-gaming" element={<ResponsibleGaming />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/promotion" element={<Promotion />} />
              <Route path="/bonuses/welcome" element={<WelcomeBonus />} />
              <Route path="/bonuses/cashback" element={<CashbackBonus />} />
              <Route path="/bonuses/referral" element={<ReferralBonus />} />
              <Route path="/bonuses/task" element={<TaskBonus />} />

              {/* Redirect routes */}
              <Route path="/login" element={<RedirectPage seoTitle="TekkaBuzz Login" canonicalPath="/login" seoDesc="TekkaBuzz login page. Access your tekka buzz account." seoKeywords={`tekkabuzz login, tekka buzz login, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20login" />} />
              <Route path="/signup" element={<RedirectPage seoTitle="TekkaBuzz Sign Up" canonicalPath="/signup" seoDesc="Sign up at TekkaBuzz. Get 20,000 Taka welcome bonus." seoKeywords={`tekkabuzz signup, tekka buzz register, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/Signup" primaryDomain={D2_URL} />} />
              <Route path="/register" element={<RedirectPage seoTitle="TekkaBuzz Register" canonicalPath="/register" seoDesc="Register at TekkaBuzz. 20,000 Taka bonus for new players." seoKeywords={`tekkabuzz register, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/Signup" primaryDomain={D2_URL} />} />
              <Route path="/app/open" element={<RedirectPage seoTitle="TekkaBuzz App" canonicalPath="/app/open" seoDesc="Open TekkaBuzz app. Download taka buzz mobile app." seoKeywords={`tekkabuzz app, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
              <Route path="/get-refercode" element={<RedirectPage seoTitle="TekkaBuzz Referral Code" canonicalPath="/get-refercode" seoDesc="Get your TekkaBuzz referral code. Earn 300 Taka per referral." seoKeywords={`tekkabuzz referral code, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20refercode" />} />
              <Route path="/go/casino" element={<RedirectPage seoTitle="TekkaBuzz Live Casino" canonicalPath="/go/casino" seoDesc="Play TekkaBuzz live casino." seoKeywords={`tekkabuzz casino, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20casino" />} />
              <Route path="/go/sports" element={<RedirectPage seoTitle="TekkaBuzz Sports Betting" canonicalPath="/go/sports" seoDesc="Tekka buzz bet -- cricket, football betting." seoKeywords={`tekka buzz bet, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20sports" />} />
              <Route path="/go/slots" element={<RedirectPage seoTitle="TekkaBuzz Slots" canonicalPath="/go/slots" seoDesc="Play 1000+ slots at TekkaBuzz." seoKeywords={`tekkabuzz slots, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20slots" />} />
              <Route path="/go/crash" element={<RedirectPage seoTitle="TekkaBuzz Crash Games" canonicalPath="/go/crash" seoDesc="Aviator, JetX crash games at TekkaBuzz." seoKeywords={`tekkabuzz crash, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20crash" />} />
              <Route path="/go/fishing" element={<RedirectPage seoTitle="TekkaBuzz Fishing Games" canonicalPath="/go/fishing" seoDesc="Play fishing games at TekkaBuzz." seoKeywords={`tekkabuzz fishing, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20fishing" />} />
              <Route path="/go/lottery" element={<RedirectPage seoTitle="TekkaBuzz Lottery" canonicalPath="/go/lottery" seoDesc="Play lottery at TekkaBuzz." seoKeywords={`tekkabuzz lottery, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20lottery" />} />
              <Route path="/go/arcade" element={<RedirectPage seoTitle="TekkaBuzz Arcade" canonicalPath="/go/arcade" seoDesc="Play arcade games at TekkaBuzz." seoKeywords={`tekkabuzz arcade, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20arcade" />} />
              <Route path="/go/vip" element={<RedirectPage seoTitle="TekkaBuzz VIP" canonicalPath="/go/vip" seoDesc="Join TekkaBuzz VIP program." seoKeywords={`tekkabuzz vip, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20vip" />} />
              <Route path="/go/table-games" element={<RedirectPage seoTitle="TekkaBuzz Table Games" canonicalPath="/go/table-games" seoDesc="Play table games at TekkaBuzz." seoKeywords={`tekkabuzz table games, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20table" />} />
              <Route path="/go/live-dealer" element={<RedirectPage seoTitle="TekkaBuzz Live Dealer" canonicalPath="/go/live-dealer" seoDesc="Play live dealer casino at TekkaBuzz." seoKeywords={`tekkabuzz live dealer, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20casino" />} />
              <Route path="/go/in" element={<RedirectPage seoTitle="TekkaBuzz IN" canonicalPath="/go/in" seoDesc="TekkaBuzz IN platform." seoKeywords={`tekkabuzz in, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" primaryDomain={D3_URL} useFailover={false} />} />
              <Route path="/facebook" element={<RedirectPage seoTitle="TekkaBuzz Facebook" canonicalPath="/facebook" seoDesc="Join TekkaBuzz Facebook community." seoKeywords="tekkabuzz facebook" fixedUrl="https://cutt.ly/er1sz2t5" useFailover={false} />} />
              <Route path="/twitter" element={<RedirectPage seoTitle="TekkaBuzz Twitter X" canonicalPath="/twitter" seoDesc="Follow TekkaBuzz on Twitter X." seoKeywords="tekkabuzz twitter" fixedUrl="https://cutt.ly/Cr45pnIf" useFailover={false} />} />
              <Route path="/instagram" element={<RedirectPage seoTitle="TekkaBuzz Instagram" canonicalPath="/instagram" seoDesc="Follow TekkaBuzz on Instagram." seoKeywords="tekkabuzz instagram" fixedUrl="https://cutt.ly/mr8yXZNI" useFailover={false} />} />
              <Route path="/telegram" element={<RedirectPage seoTitle="TekkaBuzz Telegram" canonicalPath="/telegram" seoDesc="Join TekkaBuzz Telegram group." seoKeywords="tekkabuzz telegram" fixedUrl="https://cutt.ly/Ar8yXi2i" useFailover={false} />} />

              {/* Blog routes */}
              <Route path="/blog/taka-buzz" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/tekka-buzz" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/tkkabuzz" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/takkabuzz" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/tekkabaz" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/tekabuzz" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/teka-buzz" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/teekabuzz" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/takka-buzz" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/takkabuz" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/takkbuzz" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/tekk-buzz" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/tekka-buzz-login" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/tekkabuzz-login" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/tekka-buzz-affiliate" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/tekkabuzz-affiliate" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/tekka-baji" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/tekka-buzz-bangladesh" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/tekkabuzz-bengali" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/tekka-buzz-bet" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/tekkabuzz-casino" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />
              <Route path="/blog/taka-alliance-gaming" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><BlogPages /></Suspense>} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
