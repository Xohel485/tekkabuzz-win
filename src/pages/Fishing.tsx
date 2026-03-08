import { useLocale } from "@/hooks/useLocale";
import { GAME_PAGES } from "@/lib/gameTranslations";
import GameInfoPage from "@/components/GameInfoPage";

export default function Fishing() {
  const locale = useLocale();
  const t = GAME_PAGES.fishing[locale];
  return <GameInfoPage title={t.title} description={t.description} keywords="tekkabuzz fishing, taka buzz fishing, fishing games bd" canonical="https://www.tekkabuzz.win/fishing" heading={t.heading} ctaText={t.ctaText} ctaLink="/go/fishing" content={t.content} />;
}
