import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
const AppDownload = lazy(() => import("@/pages/AppDownload"));
const AdminBlog = lazy(() => import("@/pages/AdminBlog"));
const DynamicBlogPost = lazy(() => import("@/pages/DynamicBlogPost"));

// Game info pages
const LiveCasino = lazy(() => import("@/pages/games/LiveCasino"));
const Baccarat = lazy(() => import("@/pages/games/Baccarat"));
const Blackjack = lazy(() => import("@/pages/games/Blackjack"));
const Roulette = lazy(() => import("@/pages/games/Roulette"));
const Poker = lazy(() => import("@/pages/games/Poker"));
const TeenPatti = lazy(() => import("@/pages/games/TeenPatti"));
const AndarBahar = lazy(() => import("@/pages/games/AndarBahar"));
const DragonTiger = lazy(() => import("@/pages/games/DragonTiger"));
const Esports = lazy(() => import("@/pages/games/Esports"));
const CricketBetting = lazy(() => import("@/pages/games/CricketBetting"));
const FootballBetting = lazy(() => import("@/pages/games/FootballBetting"));
const Mines = lazy(() => import("@/pages/games/Mines"));
const Plinko = lazy(() => import("@/pages/games/Plinko"));
const SportsBetting = lazy(() => import("@/pages/games/SportsBetting"));

const D2_URL = "https://tekkabuzz.cc";
const D3_URL = "https://tekkabuzz.com";
const BASE_KW = "taka buzz, tekka buzz, tekkabuzz, tkkabuzz, tekkabaz, takkabuzz, takka buzz, online casino bangladesh";

const queryClient = new QueryClient();

const Loading = () => <div className="min-h-screen bg-background" />;

// Helper: generate locale-prefixed routes for a component
const localeRoutes = (path: string, element: React.ReactNode) => (
  <>
    <Route path={path} element={element} />
    <Route path={`/bd/bn${path}`} element={element} />
    <Route path={`/pk/ur${path}`} element={element} />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<Home />} />
              <Route path="/bd/bn" element={<Home />} />
              <Route path="/pk/ur" element={<Home />} />

              {localeRoutes("/casino", <Casino />)}
              {localeRoutes("/sports", <Sports />)}
              {localeRoutes("/slots", <Slots />)}
              {localeRoutes("/crash", <Crash />)}
              {localeRoutes("/fishing", <Fishing />)}
              {localeRoutes("/lottery", <Lottery />)}
              {localeRoutes("/arcade", <Arcade />)}
              {localeRoutes("/table", <TableGames />)}
              {localeRoutes("/affiliate", <Affiliate />)}
              {localeRoutes("/referral", <Referral />)}
              {localeRoutes("/vip", <VIP />)}
              {localeRoutes("/about", <About />)}
              {localeRoutes("/contact", <Contact />)}
              {localeRoutes("/faq", <FAQ />)}
              {localeRoutes("/terms", <Terms />)}
              {localeRoutes("/privacy", <Privacy />)}
              {localeRoutes("/responsible-gaming", <ResponsibleGaming />)}
              {localeRoutes("/blog", <Blog />)}
              {localeRoutes("/promotion", <Promotion />)}
              {localeRoutes("/bonuses/welcome", <WelcomeBonus />)}
              {localeRoutes("/bonuses/cashback", <CashbackBonus />)}
              {localeRoutes("/bonuses/referral", <ReferralBonus />)}
              {localeRoutes("/bonuses/task", <TaskBonus />)}

              {/* App download / install */}
              {localeRoutes("/install", <AppDownload />)}

              {/* Admin blog */}
              <Route path="/admin/blog" element={<AdminBlog />} />

              {/* Blog sub-routes (static) */}
              <Route path="/blog/*" element={<BlogRouter />} />
              <Route path="/bd/bn/blog/*" element={<BlogRouter />} />
              <Route path="/pk/ur/blog/*" element={<BlogRouter />} />

              {/* Dynamic blog posts from Firebase */}
              <Route path="/blog/post/:slug" element={<DynamicBlogPost />} />

              {/* Game info pages */}
              {localeRoutes("/live-casino", <LiveCasino />)}
              {localeRoutes("/baccarat", <Baccarat />)}
              {localeRoutes("/blackjack", <Blackjack />)}
              {localeRoutes("/roulette", <Roulette />)}
              {localeRoutes("/poker", <Poker />)}
              {localeRoutes("/teen-patti", <TeenPatti />)}
              {localeRoutes("/andar-bahar", <AndarBahar />)}
              {localeRoutes("/dragon-tiger", <DragonTiger />)}
              {localeRoutes("/esports", <Esports />)}
              {localeRoutes("/cricket-betting", <CricketBetting />)}
              {localeRoutes("/football-betting", <FootballBetting />)}
              {localeRoutes("/mines", <Mines />)}
              {localeRoutes("/plinko", <Plinko />)}
              {localeRoutes("/sports-betting", <SportsBetting />)}

              {/* Alias routes (redirect to canonical paths) */}
              {localeRoutes("/table-games", <TableGames />)}
              {localeRoutes("/promotions", <Promotion />)}
              {localeRoutes("/terms-of-service", <Terms />)}
              {localeRoutes("/privacy-policy", <Privacy />)}
              {localeRoutes("/games/slots", <Slots />)}
              {localeRoutes("/games/live-casino", <LiveCasino />)}
              {localeRoutes("/games/sports", <Sports />)}
              {localeRoutes("/games/crash", <Crash />)}
              {localeRoutes("/games/fishing", <Fishing />)}
              {localeRoutes("/games/arcade", <Arcade />)}
              {localeRoutes("/games/lottery", <Lottery />)}
              {localeRoutes("/games/table-games", <TableGames />)}
              {localeRoutes("/affiliate-program", <Affiliate />)}

              {/* Redirect pages — affiliate links */}
              <Route path="/login" element={<RedirectPage seoTitle="TekkaBuzz Login" canonicalPath="/login" seoDesc="TekkaBuzz login page." seoKeywords={`tekkabuzz login, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20login" />} />
              <Route path="/bd/bn/login" element={<RedirectPage seoTitle="TekkaBuzz Login" canonicalPath="/login" seoDesc="TekkaBuzz login page." seoKeywords={`tekkabuzz login, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20login" />} />
              <Route path="/pk/ur/login" element={<RedirectPage seoTitle="TekkaBuzz Login" canonicalPath="/login" seoDesc="TekkaBuzz login page." seoKeywords={`tekkabuzz login, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20login" />} />

              <Route path="/signup" element={<RedirectPage seoTitle="TekkaBuzz Sign Up" canonicalPath="/signup" seoDesc="Sign up at TekkaBuzz." seoKeywords={`tekkabuzz signup, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/Signup" primaryDomain={D2_URL} />} />
              <Route path="/bd/bn/signup" element={<RedirectPage seoTitle="TekkaBuzz Sign Up" canonicalPath="/signup" seoDesc="Sign up at TekkaBuzz." seoKeywords={`tekkabuzz signup, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/Signup" primaryDomain={D2_URL} />} />
              <Route path="/pk/ur/signup" element={<RedirectPage seoTitle="TekkaBuzz Sign Up" canonicalPath="/signup" seoDesc="Sign up at TekkaBuzz." seoKeywords={`tekkabuzz signup, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/Signup" primaryDomain={D2_URL} />} />

              <Route path="/register" element={<RedirectPage seoTitle="TekkaBuzz Register" canonicalPath="/register" seoDesc="Register at TekkaBuzz." seoKeywords={`tekkabuzz register, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/Signup" primaryDomain={D2_URL} />} />

              <Route path="/app/open" element={<RedirectPage seoTitle="TekkaBuzz App" canonicalPath="/app/open" seoDesc="Open TekkaBuzz app." seoKeywords={`tekkabuzz app, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
              <Route path="/get-refercode" element={<RedirectPage seoTitle="TekkaBuzz Referral Code" canonicalPath="/get-refercode" seoDesc="Get your TekkaBuzz referral code." seoKeywords={`tekkabuzz referral, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20refercode" />} />

              {/* Redirect: /campaign → promotion */}
              {localeRoutes("/campaign", <Promotion />)}

              {/* Redirect: bonus/cashback/welcome-bonus shortcut pages */}
              {localeRoutes("/bonus", <WelcomeBonus />)}
              {localeRoutes("/welcome-bonus", <WelcomeBonus />)}
              {localeRoutes("/cashback", <CashbackBonus />)}

              {/* Redirect: deposit/withdraw/payment method pages */}
              <Route path="/deposit" element={<RedirectPage seoTitle="TekkaBuzz Deposit" canonicalPath="/deposit" seoDesc="Deposit money at TekkaBuzz via bKash, Nagad, Rocket." seoKeywords={`tekkabuzz deposit, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
              <Route path="/bd/bn/deposit" element={<RedirectPage seoTitle="TekkaBuzz Deposit" canonicalPath="/deposit" seoDesc="Deposit money at TekkaBuzz via bKash, Nagad, Rocket." seoKeywords={`tekkabuzz deposit, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
              <Route path="/pk/ur/deposit" element={<RedirectPage seoTitle="TekkaBuzz Deposit" canonicalPath="/deposit" seoDesc="Deposit money at TekkaBuzz via bKash, Nagad, Rocket." seoKeywords={`tekkabuzz deposit, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />

              <Route path="/withdraw" element={<RedirectPage seoTitle="TekkaBuzz Withdraw" canonicalPath="/withdraw" seoDesc="Withdraw your winnings from TekkaBuzz." seoKeywords={`tekkabuzz withdraw, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
              <Route path="/bd/bn/withdraw" element={<RedirectPage seoTitle="TekkaBuzz Withdraw" canonicalPath="/withdraw" seoDesc="Withdraw your winnings from TekkaBuzz." seoKeywords={`tekkabuzz withdraw, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
              <Route path="/pk/ur/withdraw" element={<RedirectPage seoTitle="TekkaBuzz Withdraw" canonicalPath="/withdraw" seoDesc="Withdraw your winnings from TekkaBuzz." seoKeywords={`tekkabuzz withdraw, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />

              <Route path="/bkash" element={<RedirectPage seoTitle="TekkaBuzz bKash" canonicalPath="/bkash" seoDesc="Deposit & withdraw with bKash at TekkaBuzz." seoKeywords={`tekkabuzz bkash, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
              <Route path="/bd/bn/bkash" element={<RedirectPage seoTitle="TekkaBuzz bKash" canonicalPath="/bkash" seoDesc="Deposit & withdraw with bKash at TekkaBuzz." seoKeywords={`tekkabuzz bkash, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
              <Route path="/pk/ur/bkash" element={<RedirectPage seoTitle="TekkaBuzz bKash" canonicalPath="/bkash" seoDesc="Deposit & withdraw with bKash at TekkaBuzz." seoKeywords={`tekkabuzz bkash, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />

              <Route path="/nagad" element={<RedirectPage seoTitle="TekkaBuzz Nagad" canonicalPath="/nagad" seoDesc="Deposit & withdraw with Nagad at TekkaBuzz." seoKeywords={`tekkabuzz nagad, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
              <Route path="/bd/bn/nagad" element={<RedirectPage seoTitle="TekkaBuzz Nagad" canonicalPath="/nagad" seoDesc="Deposit & withdraw with Nagad at TekkaBuzz." seoKeywords={`tekkabuzz nagad, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
              <Route path="/pk/ur/nagad" element={<RedirectPage seoTitle="TekkaBuzz Nagad" canonicalPath="/nagad" seoDesc="Deposit & withdraw with Nagad at TekkaBuzz." seoKeywords={`tekkabuzz nagad, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />

              <Route path="/rocket" element={<RedirectPage seoTitle="TekkaBuzz Rocket" canonicalPath="/rocket" seoDesc="Deposit & withdraw with Rocket at TekkaBuzz." seoKeywords={`tekkabuzz rocket, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
              <Route path="/bd/bn/rocket" element={<RedirectPage seoTitle="TekkaBuzz Rocket" canonicalPath="/rocket" seoDesc="Deposit & withdraw with Rocket at TekkaBuzz." seoKeywords={`tekkabuzz rocket, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
              <Route path="/pk/ur/rocket" element={<RedirectPage seoTitle="TekkaBuzz Rocket" canonicalPath="/rocket" seoDesc="Deposit & withdraw with Rocket at TekkaBuzz." seoKeywords={`tekkabuzz rocket, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />

              {/* App download redirect pages */}
              <Route path="/download" element={<RedirectPage seoTitle="TekkaBuzz Download" canonicalPath="/download" seoDesc="Download TekkaBuzz app." seoKeywords={`tekkabuzz download, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
              <Route path="/bd/bn/download" element={<RedirectPage seoTitle="TekkaBuzz Download" canonicalPath="/download" seoDesc="Download TekkaBuzz app." seoKeywords={`tekkabuzz download, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
              <Route path="/pk/ur/download" element={<RedirectPage seoTitle="TekkaBuzz Download" canonicalPath="/download" seoDesc="Download TekkaBuzz app." seoKeywords={`tekkabuzz download, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />

              <Route path="/app" element={<RedirectPage seoTitle="TekkaBuzz App" canonicalPath="/app" seoDesc="TekkaBuzz mobile app." seoKeywords={`tekkabuzz app download, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
              <Route path="/bd/bn/app" element={<RedirectPage seoTitle="TekkaBuzz App" canonicalPath="/app" seoDesc="TekkaBuzz mobile app." seoKeywords={`tekkabuzz app download, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
              <Route path="/pk/ur/app" element={<RedirectPage seoTitle="TekkaBuzz App" canonicalPath="/app" seoDesc="TekkaBuzz mobile app." seoKeywords={`tekkabuzz app download, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />

              <Route path="/apk" element={<RedirectPage seoTitle="TekkaBuzz APK" canonicalPath="/apk" seoDesc="Download TekkaBuzz APK." seoKeywords={`tekkabuzz apk, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
              <Route path="/bd/bn/apk" element={<RedirectPage seoTitle="TekkaBuzz APK" canonicalPath="/apk" seoDesc="Download TekkaBuzz APK." seoKeywords={`tekkabuzz apk, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
              <Route path="/pk/ur/apk" element={<RedirectPage seoTitle="TekkaBuzz APK" canonicalPath="/apk" seoDesc="Download TekkaBuzz APK." seoKeywords={`tekkabuzz apk, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />

              <Route path="/android" element={<RedirectPage seoTitle="TekkaBuzz Android" canonicalPath="/android" seoDesc="Download TekkaBuzz for Android." seoKeywords={`tekkabuzz android, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
              <Route path="/bd/bn/android" element={<RedirectPage seoTitle="TekkaBuzz Android" canonicalPath="/android" seoDesc="Download TekkaBuzz for Android." seoKeywords={`tekkabuzz android, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
              <Route path="/pk/ur/android" element={<RedirectPage seoTitle="TekkaBuzz Android" canonicalPath="/android" seoDesc="Download TekkaBuzz for Android." seoKeywords={`tekkabuzz android, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />

              <Route path="/ios" element={<RedirectPage seoTitle="TekkaBuzz iOS" canonicalPath="/ios" seoDesc="Download TekkaBuzz for iOS." seoKeywords={`tekkabuzz ios, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
              <Route path="/bd/bn/ios" element={<RedirectPage seoTitle="TekkaBuzz iOS" canonicalPath="/ios" seoDesc="Download TekkaBuzz for iOS." seoKeywords={`tekkabuzz ios, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
              <Route path="/pk/ur/ios" element={<RedirectPage seoTitle="TekkaBuzz iOS" canonicalPath="/ios" seoDesc="Download TekkaBuzz for iOS." seoKeywords={`tekkabuzz ios, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />

              {/* Post routes (blog aliases) */}
              <Route path="/post/*" element={<BlogRouter />} />
              <Route path="/bd/bn/post/*" element={<BlogRouter />} />
              <Route path="/pk/ur/post/*" element={<BlogRouter />} />

              {/* /go/ redirect routes */}
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

              {/* Social media redirects */}
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
