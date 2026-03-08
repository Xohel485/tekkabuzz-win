import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
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
const LocalizedBlog = lazy(() => import("@/pages/LocalizedBlog"));
const LocalizedPost = lazy(() => import("@/pages/LocalizedPost"));
const Promotion = lazy(() => import("@/pages/Promotion"));
const Campaign = lazy(() => import("@/pages/Campaign"));
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

// Game landing pages
const SlotsLanding = lazy(() => import("@/pages/games/SlotsLanding"));
const LiveCasinoLanding = lazy(() => import("@/pages/games/LiveCasinoLanding"));
const SportsLanding = lazy(() => import("@/pages/games/SportsLanding"));
const CrashLanding = lazy(() => import("@/pages/games/CrashLanding"));
const FishingLanding = lazy(() => import("@/pages/games/FishingLanding"));
const ArcadeLanding = lazy(() => import("@/pages/games/ArcadeLanding"));
const LotteryLanding = lazy(() => import("@/pages/games/LotteryLanding"));
const TableGamesLanding = lazy(() => import("@/pages/games/TableGamesLanding"));

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
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <PerformanceOptimizer />
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
                <Route path="/blog" element={<Blog />} />
                <Route path="/bd/bn/blog" element={<LocalizedBlog />} />
                <Route path="/pk/ur/blog" element={<LocalizedBlog />} />
                {localeRoutes("/promotion", <Promotion />)}
                {localeRoutes("/campaign", <Campaign />)}
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
                <Route path="/bd/bn/blog/post/:slug" element={<LocalizedPost />} />
                <Route path="/pk/ur/blog/post/:slug" element={<LocalizedPost />} />

                {/* Post routes (blog aliases) */}
                <Route path="/post/*" element={<BlogRouter />} />
                <Route path="/bd/bn/post/*" element={<BlogRouter />} />
                <Route path="/pk/ur/post/*" element={<BlogRouter />} />

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

                {/* Game landing pages */}
                {localeRoutes("/games/slots", <SlotsLanding />)}
                {localeRoutes("/games/live-casino", <LiveCasinoLanding />)}
                {localeRoutes("/games/sports", <SportsLanding />)}
                {localeRoutes("/games/crash", <CrashLanding />)}
                {localeRoutes("/games/fishing", <FishingLanding />)}
                {localeRoutes("/games/arcade", <ArcadeLanding />)}
                {localeRoutes("/games/lottery", <LotteryLanding />)}
                {localeRoutes("/games/table-games", <TableGamesLanding />)}

                {/* Alias routes */}
                {localeRoutes("/table-games", <TableGames />)}
                {localeRoutes("/promotions", <Promotion />)}
                {localeRoutes("/terms-of-service", <Terms />)}
                {localeRoutes("/privacy-policy", <Privacy />)}
                {localeRoutes("/affiliate-program", <Affiliate />)}

                {/* Redirect: /campaign → promotion alias */}
                {localeRoutes("/bonus", <WelcomeBonus />)}
                {localeRoutes("/welcome-bonus", <WelcomeBonus />)}
                {localeRoutes("/cashback", <CashbackBonus />)}

                {/* Redirect pages — affiliate links */}
                <Route path="/login" element={<RedirectPage seoTitle="TekkaBuzz Login" canonicalPath="/login" seoDesc="TekkaBuzz login page." seoKeywords={`tekkabuzz login, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20login" />} />
                <Route path="/bd/bn/login" element={<RedirectPage seoTitle="TekkaBuzz Login" canonicalPath="/login" seoDesc="TekkaBuzz login page." seoKeywords={`tekkabuzz login, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20login" />} />
                <Route path="/pk/ur/login" element={<RedirectPage seoTitle="TekkaBuzz Login" canonicalPath="/login" seoDesc="TekkaBuzz login page." seoKeywords={`tekkabuzz login, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20login" />} />

                <Route path="/signup" element={<RedirectPage seoTitle="TekkaBuzz Sign Up" canonicalPath="/signup" seoDesc="Sign up at TekkaBuzz." seoKeywords={`tekkabuzz signup, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/Signup" primaryDomain={D2_URL} />} />
                <Route path="/bd/bn/signup" element={<RedirectPage seoTitle="TekkaBuzz Sign Up" canonicalPath="/signup" seoDesc="Sign up at TekkaBuzz." seoKeywords={`tekkabuzz signup, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/Signup" primaryDomain={D2_URL} />} />
                <Route path="/pk/ur/signup" element={<RedirectPage seoTitle="TekkaBuzz Sign Up" canonicalPath="/signup" seoDesc="Sign up at TekkaBuzz." seoKeywords={`tekkabuzz signup, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/Signup" primaryDomain={D2_URL} />} />

                <Route path="/register" element={<RedirectPage seoTitle="TekkaBuzz Register" canonicalPath="/register" seoDesc="Register at TekkaBuzz." seoKeywords={`tekkabuzz register, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/Signup" primaryDomain={D2_URL} />} />

                <Route path="/app/open" element={<RedirectPage seoTitle="Open TekkaBuzz App — Launch Your Casino" canonicalPath="/app/open" seoDesc="Launch the TekkaBuzz app directly from your browser. Instant access to 6300+ games, live casino, and sports betting." seoKeywords={`tekkabuzz app, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
                <Route path="/get-refercode" element={<RedirectPage seoTitle="TekkaBuzz Referral Code" canonicalPath="/get-refercode" seoDesc="Get your TekkaBuzz referral code." seoKeywords={`tekkabuzz referral, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20refercode" />} />

                {/* Deposit/Withdraw/Payment redirect pages */}
                <Route path="/deposit" element={<RedirectPage seoTitle="TekkaBuzz Deposit" canonicalPath="/deposit" seoDesc="Deposit money at TekkaBuzz via bKash, Nagad, Rocket." seoKeywords={`tekkabuzz deposit, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
                <Route path="/bd/bn/deposit" element={<RedirectPage seoTitle="TekkaBuzz Deposit" canonicalPath="/deposit" seoDesc="Deposit money at TekkaBuzz via bKash, Nagad, Rocket." seoKeywords={`tekkabuzz deposit, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
                <Route path="/pk/ur/deposit" element={<RedirectPage seoTitle="TekkaBuzz Deposit" canonicalPath="/deposit" seoDesc="Deposit money at TekkaBuzz via bKash, Nagad, Rocket." seoKeywords={`tekkabuzz deposit, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />

                <Route path="/withdraw" element={<RedirectPage seoTitle="TekkaBuzz Withdraw" canonicalPath="/withdraw" seoDesc="Withdraw your winnings from TekkaBuzz." seoKeywords={`tekkabuzz withdraw, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
                <Route path="/bd/bn/withdraw" element={<RedirectPage seoTitle="TekkaBuzz Withdraw" canonicalPath="/withdraw" seoDesc="Withdraw your winnings from TekkaBuzz." seoKeywords={`tekkabuzz withdraw, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
                <Route path="/pk/ur/withdraw" element={<RedirectPage seoTitle="TekkaBuzz Withdraw" canonicalPath="/withdraw" seoDesc="Withdraw your winnings from TekkaBuzz." seoKeywords={`tekkabuzz withdraw, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />

                <Route path="/withdrawal" element={<RedirectPage seoTitle="TekkaBuzz Withdrawal — Instant bKash Nagad Payout" canonicalPath="/withdrawal" seoDesc="TekkaBuzz instant withdrawal via bKash, Nagad, Rocket & Crypto. Get your winnings in under 5 minutes with zero fees." seoKeywords={`tekkabuzz withdrawal, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
                <Route path="/payment" element={<RedirectPage seoTitle="TekkaBuzz Payment — Deposit & Withdraw Securely" canonicalPath="/payment" seoDesc="Make secure deposits and withdrawals at TekkaBuzz. Supports bKash, Nagad, Rocket, Upay, crypto and bank cards. Minimum 200 Taka." seoKeywords={`tekkabuzz payment, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
                <Route path="/payment-methods" element={<RedirectPage seoTitle="TekkaBuzz Payment Methods" canonicalPath="/payment-methods" seoDesc="TekkaBuzz payment methods — bKash, Nagad, Rocket, Crypto." seoKeywords={`tekkabuzz payment methods, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />

                <Route path="/bkash" element={<RedirectPage seoTitle="TekkaBuzz bKash" canonicalPath="/bkash" seoDesc="Deposit & withdraw with bKash at TekkaBuzz." seoKeywords={`tekkabuzz bkash, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
                <Route path="/bd/bn/bkash" element={<RedirectPage seoTitle="TekkaBuzz bKash" canonicalPath="/bkash" seoDesc="Deposit & withdraw with bKash at TekkaBuzz." seoKeywords={`tekkabuzz bkash, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
                <Route path="/pk/ur/bkash" element={<RedirectPage seoTitle="TekkaBuzz bKash" canonicalPath="/bkash" seoDesc="Deposit & withdraw with bKash at TekkaBuzz." seoKeywords={`tekkabuzz bkash, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />

                <Route path="/nagad" element={<RedirectPage seoTitle="TekkaBuzz Nagad" canonicalPath="/nagad" seoDesc="Deposit & withdraw with Nagad at TekkaBuzz." seoKeywords={`tekkabuzz nagad, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
                <Route path="/bd/bn/nagad" element={<RedirectPage seoTitle="TekkaBuzz Nagad" canonicalPath="/nagad" seoDesc="Deposit & withdraw with Nagad at TekkaBuzz." seoKeywords={`tekkabuzz nagad, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
                <Route path="/pk/ur/nagad" element={<RedirectPage seoTitle="TekkaBuzz Nagad" canonicalPath="/nagad" seoDesc="Deposit & withdraw with Nagad at TekkaBuzz." seoKeywords={`tekkabuzz nagad, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />

                <Route path="/rocket" element={<RedirectPage seoTitle="TekkaBuzz Rocket" canonicalPath="/rocket" seoDesc="Deposit & withdraw with Rocket at TekkaBuzz." seoKeywords={`tekkabuzz rocket, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
                <Route path="/bd/bn/rocket" element={<RedirectPage seoTitle="TekkaBuzz Rocket" canonicalPath="/rocket" seoDesc="Deposit & withdraw with Rocket at TekkaBuzz." seoKeywords={`tekkabuzz rocket, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />
                <Route path="/pk/ur/rocket" element={<RedirectPage seoTitle="TekkaBuzz Rocket" canonicalPath="/rocket" seoDesc="Deposit & withdraw with Rocket at TekkaBuzz." seoKeywords={`tekkabuzz rocket, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />

                <Route path="/upay" element={<RedirectPage seoTitle="TekkaBuzz Upay" canonicalPath="/upay" seoDesc="Deposit & withdraw with Upay at TekkaBuzz." seoKeywords={`tekkabuzz upay, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />

                {/* Additional game redirect pages */}
                <Route path="/sic-bo" element={<RedirectPage seoTitle="TekkaBuzz Sic Bo" canonicalPath="/sic-bo" seoDesc="Play Sic Bo at TekkaBuzz." seoKeywords={`tekkabuzz sic bo, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20casino" />} />
                <Route path="/keno" element={<RedirectPage seoTitle="TekkaBuzz Keno" canonicalPath="/keno" seoDesc="Play Keno at TekkaBuzz." seoKeywords={`tekkabuzz keno, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20casino" />} />
                <Route path="/dice" element={<RedirectPage seoTitle="TekkaBuzz Dice" canonicalPath="/dice" seoDesc="Play Dice games at TekkaBuzz." seoKeywords={`tekkabuzz dice, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20casino" />} />
                <Route path="/limbo" element={<RedirectPage seoTitle="TekkaBuzz Limbo" canonicalPath="/limbo" seoDesc="Play Limbo at TekkaBuzz." seoKeywords={`tekkabuzz limbo, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20crash" />} />
                <Route path="/hilo" element={<RedirectPage seoTitle="TekkaBuzz HiLo" canonicalPath="/hilo" seoDesc="Play HiLo at TekkaBuzz." seoKeywords={`tekkabuzz hilo, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20casino" />} />

                {/* Game alias redirects */}
                <Route path="/crash-games" element={<RedirectPage seoTitle="TekkaBuzz Crash Games" canonicalPath="/crash-games" seoDesc="Play crash games at TekkaBuzz." seoKeywords={`tekkabuzz crash games, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20crash" />} />
                <Route path="/fishing-games" element={<RedirectPage seoTitle="TekkaBuzz Fishing Games" canonicalPath="/fishing-games" seoDesc="Play fishing games at TekkaBuzz." seoKeywords={`tekkabuzz fishing games, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20fishing" />} />
                <Route path="/lottery-games" element={<RedirectPage seoTitle="TekkaBuzz Lottery Games" canonicalPath="/lottery-games" seoDesc="Play lottery games at TekkaBuzz." seoKeywords={`tekkabuzz lottery games, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20lottery" />} />
                <Route path="/arcade-games" element={<RedirectPage seoTitle="TekkaBuzz Arcade Games" canonicalPath="/arcade-games" seoDesc="Play arcade games at TekkaBuzz." seoKeywords={`tekkabuzz arcade games, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20arcade" />} />
                <Route path="/card-games" element={<RedirectPage seoTitle="TekkaBuzz Card Games" canonicalPath="/card-games" seoDesc="Play card games at TekkaBuzz." seoKeywords={`tekkabuzz card games, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20casino" />} />
                <Route path="/live-dealer" element={<RedirectPage seoTitle="TekkaBuzz Live Dealer — Real Casino Experience" canonicalPath="/live-dealer" seoDesc="Play live dealer casino games at TekkaBuzz with real dealers. HD streaming Baccarat, Roulette, Blackjack & Dragon Tiger 24/7." seoKeywords={`tekkabuzz live dealer, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20casino" />} />

                {/* Program/bonus aliases */}
                <Route path="/vip-program" element={<RedirectPage seoTitle="TekkaBuzz VIP Program" canonicalPath="/vip-program" seoDesc="TekkaBuzz VIP program with exclusive benefits." seoKeywords={`tekkabuzz vip program, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20vip" />} />
                <Route path="/daily-bonus" element={<RedirectPage seoTitle="TekkaBuzz Daily Bonus" canonicalPath="/daily-bonus" seoDesc="Get daily bonuses at TekkaBuzz." seoKeywords={`tekkabuzz daily bonus, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20in" />} />

                {/* Affiliate redirect routes */}
                <Route path="/affiliate/signup" element={<RedirectPage seoTitle="TekkaBuzz Affiliate Signup" canonicalPath="/affiliate/signup" seoDesc="Join the TekkaBuzz affiliate program." seoKeywords={`tekkabuzz affiliate signup, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20affiliate" />} />
                <Route path="/affiliate/login" element={<RedirectPage seoTitle="TekkaBuzz Affiliate Login" canonicalPath="/affiliate/login" seoDesc="Login to TekkaBuzz affiliate portal." seoKeywords={`tekkabuzz affiliate login, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20affiliate" />} />
                <Route path="/partners" element={<RedirectPage seoTitle="TekkaBuzz Partners" canonicalPath="/partners" seoDesc="TekkaBuzz partner program." seoKeywords={`tekkabuzz partners, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20affiliate" />} />

                {/* Support redirect pages */}
                <Route path="/support" element={<RedirectPage seoTitle="TekkaBuzz Support — 24/7 Customer Help" canonicalPath="/support" seoDesc="Get 24/7 customer support at TekkaBuzz. Bengali & English agents available via live chat, Telegram, and email for instant help." seoKeywords={`tekkabuzz support, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20login" />} />
                <Route path="/help" element={<RedirectPage seoTitle="TekkaBuzz Help Center — FAQs & Guides" canonicalPath="/help" seoDesc="Find answers to common questions about TekkaBuzz deposits, withdrawals, bonuses, and account issues in our help center." seoKeywords={`tekkabuzz help, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20login" />} />
                <Route path="/live-chat" element={<RedirectPage seoTitle="TekkaBuzz Live Chat — Instant Support" canonicalPath="/live-chat" seoDesc="Chat live with TekkaBuzz support agents. Get instant help with deposits, withdrawals, bonuses and technical issues 24/7." seoKeywords={`tekkabuzz live chat, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20login" />} />
                <Route path="/customer-service" element={<RedirectPage seoTitle="TekkaBuzz Customer Service" canonicalPath="/customer-service" seoDesc="TekkaBuzz customer service." seoKeywords={`tekkabuzz customer service, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20login" />} />

                {/* Legal aliases */}
                <Route path="/terms-conditions" element={<RedirectPage seoTitle="TekkaBuzz Terms & Conditions" canonicalPath="/terms-conditions" seoDesc="TekkaBuzz terms and conditions." seoKeywords={`tekkabuzz terms, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/tekkabuzz%20login" />} />

                {/* App download redirect pages */}
                <Route path="/download" element={<RedirectPage seoTitle="Download TekkaBuzz — Free Casino App" canonicalPath="/download" seoDesc="Download the TekkaBuzz app for free. Fast, lightweight casino app with 6300+ games, live betting, and instant bKash withdrawals." seoKeywords={`tekkabuzz download, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
                <Route path="/bd/bn/download" element={<RedirectPage seoTitle="Download TekkaBuzz — Free Casino App" canonicalPath="/download" seoDesc="Download the TekkaBuzz app for free. Fast, lightweight casino app with 6300+ games, live betting, and instant bKash withdrawals." seoKeywords={`tekkabuzz download, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
                <Route path="/pk/ur/download" element={<RedirectPage seoTitle="Download TekkaBuzz — Free Casino App" canonicalPath="/download" seoDesc="Download the TekkaBuzz app for free. Fast, lightweight casino app with 6300+ games, live betting, and instant bKash withdrawals." seoKeywords={`tekkabuzz download, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />

                <Route path="/app" element={<RedirectPage seoTitle="TekkaBuzz Mobile App — Play Anywhere" canonicalPath="/app" seoDesc="TekkaBuzz mobile app for Android & iOS. Play casino, sports, slots on the go. Optimized for Bangladeshi networks with low data usage." seoKeywords={`tekkabuzz app download, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
                <Route path="/bd/bn/app" element={<RedirectPage seoTitle="TekkaBuzz Mobile App — Play Anywhere" canonicalPath="/app" seoDesc="TekkaBuzz mobile app for Android & iOS. Play casino, sports, slots on the go. Optimized for Bangladeshi networks with low data usage." seoKeywords={`tekkabuzz app download, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
                <Route path="/pk/ur/app" element={<RedirectPage seoTitle="TekkaBuzz Mobile App — Play Anywhere" canonicalPath="/app" seoDesc="TekkaBuzz mobile app for Android & iOS. Play casino, sports, slots on the go. Optimized for Bangladeshi networks with low data usage." seoKeywords={`tekkabuzz app download, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />

                <Route path="/apk" element={<RedirectPage seoTitle="TekkaBuzz APK" canonicalPath="/apk" seoDesc="Download TekkaBuzz APK." seoKeywords={`tekkabuzz apk, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
                <Route path="/bd/bn/apk" element={<RedirectPage seoTitle="TekkaBuzz APK" canonicalPath="/apk" seoDesc="Download TekkaBuzz APK." seoKeywords={`tekkabuzz apk, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
                <Route path="/pk/ur/apk" element={<RedirectPage seoTitle="TekkaBuzz APK" canonicalPath="/apk" seoDesc="Download TekkaBuzz APK." seoKeywords={`tekkabuzz apk, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />

                <Route path="/android" element={<RedirectPage seoTitle="TekkaBuzz Android" canonicalPath="/android" seoDesc="Download TekkaBuzz for Android." seoKeywords={`tekkabuzz android, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
                <Route path="/bd/bn/android" element={<RedirectPage seoTitle="TekkaBuzz Android" canonicalPath="/android" seoDesc="Download TekkaBuzz for Android." seoKeywords={`tekkabuzz android, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
                <Route path="/pk/ur/android" element={<RedirectPage seoTitle="TekkaBuzz Android" canonicalPath="/android" seoDesc="Download TekkaBuzz for Android." seoKeywords={`tekkabuzz android, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />

                <Route path="/ios" element={<RedirectPage seoTitle="TekkaBuzz iOS" canonicalPath="/ios" seoDesc="Download TekkaBuzz for iOS." seoKeywords={`tekkabuzz ios, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
                <Route path="/bd/bn/ios" element={<RedirectPage seoTitle="TekkaBuzz iOS" canonicalPath="/ios" seoDesc="Download TekkaBuzz for iOS." seoKeywords={`tekkabuzz ios, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />
                <Route path="/pk/ur/ios" element={<RedirectPage seoTitle="TekkaBuzz iOS" canonicalPath="/ios" seoDesc="Download TekkaBuzz for iOS." seoKeywords={`tekkabuzz ios, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />

                <Route path="/mobile" element={<RedirectPage seoTitle="TekkaBuzz Mobile" canonicalPath="/mobile" seoDesc="TekkaBuzz mobile gaming." seoKeywords={`tekkabuzz mobile, ${BASE_KW}`} affiliatePath="/af/9oI2NL83/App" />} />

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
                <Route path="/x" element={<RedirectPage seoTitle="TekkaBuzz X (Twitter)" canonicalPath="/x" seoDesc="TekkaBuzz on X." seoKeywords="tekkabuzz x twitter" fixedUrl="https://cutt.ly/Cr45pnIf" useFailover={false} />} />
                <Route path="/instagram" element={<RedirectPage seoTitle="TekkaBuzz Instagram" canonicalPath="/instagram" seoDesc="TekkaBuzz Instagram." seoKeywords="tekkabuzz instagram" fixedUrl="https://cutt.ly/mr8yXZNI" useFailover={false} />} />
                <Route path="/telegram" element={<RedirectPage seoTitle="TekkaBuzz Telegram" canonicalPath="/telegram" seoDesc="TekkaBuzz Telegram." seoKeywords="tekkabuzz telegram" fixedUrl="https://cutt.ly/Ar8yXi2i" useFailover={false} />} />
                <Route path="/community" element={<RedirectPage seoTitle="TekkaBuzz Community" canonicalPath="/community" seoDesc="Join TekkaBuzz community." seoKeywords="tekkabuzz community" fixedUrl="https://cutt.ly/Ar8yXi2i" useFailover={false} />} />
                <Route path="/youtube" element={<RedirectPage seoTitle="TekkaBuzz YouTube" canonicalPath="/youtube" seoDesc="TekkaBuzz YouTube channel." seoKeywords="tekkabuzz youtube" fixedUrl="https://cutt.ly/Ar8yXi2i" useFailover={false} />} />
                <Route path="/tiktok" element={<RedirectPage seoTitle="TekkaBuzz TikTok" canonicalPath="/tiktok" seoDesc="TekkaBuzz TikTok." seoKeywords="tekkabuzz tiktok" fixedUrl="https://cutt.ly/Ar8yXi2i" useFailover={false} />} />

                {/* Shorthand locale redirects */}
                <Route path="/bn" element={<Navigate to="/bd/bn" replace />} />
                <Route path="/bn/*" element={<Navigate to="/bd/bn" replace />} />
                <Route path="/ur" element={<Navigate to="/pk/ur" replace />} />
                <Route path="/ur/*" element={<Navigate to="/pk/ur" replace />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
