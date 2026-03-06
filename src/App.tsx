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
const BlogRouter = lazy(() => import("@/pages/blog/BlogRouter"));

const D2_URL = "https://tekkabuzz.cc";
const D3_URL = "https://tekkabuzz.com";
const BASE_KW = "taka buzz, tekka buzz, tekkabuzz, tkkabuzz, tekkabaz, takkabuzz, takka buzz, online casino bangladesh";

const queryClient = new QueryClient();

const Loading = () => <div className="min-h-screen bg-background" />;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
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
              <Route path="/blog/*" element={<BlogRouter />} />
              <Route path="/promotion" element={<Promotion />} />
              <Route path="/bonuses/welcome" element={<WelcomeBonus />} />
              <Route path="/bonuses/cashback" element={<CashbackBonus />} />
              <Route path="/bonuses/referral" element={<ReferralBonus />} />
              <Route path="/bonuses/task" element={<TaskBonus />} />

              {/* Redirect routes */}
              <Route path="/login" element={<RedirectPage seoTitle="TekkaBuzz Login" canonicalPath="/login" seoDesc="TekkaBuzz login page." seoKeywords={`tekkabuzz login, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20login" />} />
              <Route path="/signup" element={<RedirectPage seoTitle="TekkaBuzz Sign Up" canonicalPath="/signup" seoDesc="Sign up at TekkaBuzz." seoKeywords={`tekkabuzz signup, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/Signup" primaryDomain={D2_URL} />} />
              <Route path="/register" element={<RedirectPage seoTitle="TekkaBuzz Register" canonicalPath="/register" seoDesc="Register at TekkaBuzz." seoKeywords={`tekkabuzz register, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/Signup" primaryDomain={D2_URL} />} />
              <Route path="/app/open" element={<RedirectPage seoTitle="TekkaBuzz App" canonicalPath="/app/open" seoDesc="Open TekkaBuzz app." seoKeywords={`tekkabuzz app, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
              <Route path="/get-refercode" element={<RedirectPage seoTitle="TekkaBuzz Referral Code" canonicalPath="/get-refercode" seoDesc="Get your TekkaBuzz referral code." seoKeywords={`tekkabuzz referral, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20refercode" />} />
              <Route path="/go/casino" element={<RedirectPage seoTitle="TekkaBuzz Live Casino" canonicalPath="/go/casino" seoDesc="Play TekkaBuzz live casino." seoKeywords={`tekkabuzz casino, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20casino" />} />
              <Route path="/go/sports" element={<RedirectPage seoTitle="TekkaBuzz Sports" canonicalPath="/go/sports" seoDesc="Tekka buzz bet." seoKeywords={`tekka buzz bet, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20sports" />} />
              <Route path="/go/slots" element={<RedirectPage seoTitle="TekkaBuzz Slots" canonicalPath="/go/slots" seoDesc="Play slots at TekkaBuzz." seoKeywords={`tekkabuzz slots, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20slots" />} />
              <Route path="/go/crash" element={<RedirectPage seoTitle="TekkaBuzz Crash" canonicalPath="/go/crash" seoDesc="Crash games at TekkaBuzz." seoKeywords={`tekkabuzz crash, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20crash" />} />
              <Route path="/go/fishing" element={<RedirectPage seoTitle="TekkaBuzz Fishing" canonicalPath="/go/fishing" seoDesc="Fishing games at TekkaBuzz." seoKeywords={`tekkabuzz fishing, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20fishing" />} />
              <Route path="/go/lottery" element={<RedirectPage seoTitle="TekkaBuzz Lottery" canonicalPath="/go/lottery" seoDesc="Lottery at TekkaBuzz." seoKeywords={`tekkabuzz lottery, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20lottery" />} />
              <Route path="/go/arcade" element={<RedirectPage seoTitle="TekkaBuzz Arcade" canonicalPath="/go/arcade" seoDesc="Arcade games at TekkaBuzz." seoKeywords={`tekkabuzz arcade, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20arcade" />} />
              <Route path="/go/vip" element={<RedirectPage seoTitle="TekkaBuzz VIP" canonicalPath="/go/vip" seoDesc="TekkaBuzz VIP program." seoKeywords={`tekkabuzz vip, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20vip" />} />
              <Route path="/go/table-games" element={<RedirectPage seoTitle="TekkaBuzz Table Games" canonicalPath="/go/table-games" seoDesc="Table games at TekkaBuzz." seoKeywords={`tekkabuzz table, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20table" />} />
              <Route path="/go/live-dealer" element={<RedirectPage seoTitle="TekkaBuzz Live Dealer" canonicalPath="/go/live-dealer" seoDesc="Live dealer at TekkaBuzz." seoKeywords={`tekkabuzz live dealer, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20casino" />} />
              <Route path="/go/in" element={<RedirectPage seoTitle="TekkaBuzz IN" canonicalPath="/go/in" seoDesc="TekkaBuzz IN." seoKeywords={`tekkabuzz in, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" primaryDomain={D3_URL} useFailover={false} />} />
              <Route path="/facebook" element={<RedirectPage seoTitle="TekkaBuzz Facebook" canonicalPath="/facebook" seoDesc="TekkaBuzz Facebook." seoKeywords="tekkabuzz facebook" fixedUrl="https://cutt.ly/er1sz2t5" useFailover={false} />} />
              <Route path="/twitter" element={<RedirectPage seoTitle="TekkaBuzz Twitter" canonicalPath="/twitter" seoDesc="TekkaBuzz Twitter." seoKeywords="tekkabuzz twitter" fixedUrl="https://cutt.ly/Cr45pnIf" useFailover={false} />} />
              <Route path="/instagram" element={<RedirectPage seoTitle="TekkaBuzz Instagram" canonicalPath="/instagram" seoDesc="TekkaBuzz Instagram." seoKeywords="tekkabuzz instagram" fixedUrl="https://cutt.ly/mr8yXZNI" useFailover={false} />} />
              <Route path="/telegram" element={<RedirectPage seoTitle="TekkaBuzz Telegram" canonicalPath="/telegram" seoDesc="TekkaBuzz Telegram." seoKeywords="tekkabuzz telegram" fixedUrl="https://cutt.ly/Ar8yXi2i" useFailover={false} />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
