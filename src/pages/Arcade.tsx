import { useLocale } from "@/hooks/useLocale";
import { GAME_PAGES } from "@/lib/gameTranslations";
import GameInfoPage from "@/components/GameInfoPage";

export default function Arcade() {
  const locale = useLocale();
  const t = GAME_PAGES.arcade[locale];
  return <GameInfoPage title={t.title} description={t.description} keywords="tekkabuzz arcade, taka buzz arcade, online arcade bd" canonical="https://www.tekkabuzz.win/arcade" heading={t.heading} ctaText={t.ctaText} ctaLink="/go/arcade" content={t.content} />;
}
