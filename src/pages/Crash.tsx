import { useLocale } from "@/hooks/useLocale";
import { GAME_PAGES } from "@/lib/gameTranslations";
import GameInfoPage from "@/components/GameInfoPage";

export default function Crash() {
  const locale = useLocale();
  const t = GAME_PAGES.crash[locale];
  return <GameInfoPage title={t.title} description={t.description} keywords="tekkabuzz crash, tekka buzz crash, aviator bangladesh, JetX bd" canonical="https://www.tekkabuzz.win/crash" heading={t.heading} ctaText={t.ctaText} ctaLink="/go/crash" content={t.content} />;
}
