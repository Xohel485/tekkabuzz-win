import { useLocale } from "@/hooks/useLocale";
import { GAME_PAGES } from "@/lib/gameTranslations";
import GameInfoPage from "@/components/GameInfoPage";

export default function Lottery() {
  const locale = useLocale();
  const t = GAME_PAGES.lottery[locale];
  return <GameInfoPage title={t.title} description={t.description} keywords="tekkabuzz lottery, taka buzz lottery, online lottery bd" canonical="https://www.tekkabuzz.win/lottery" heading={t.heading} ctaText={t.ctaText} ctaLink="/go/lottery" content={t.content} />;
}
