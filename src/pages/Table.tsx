import { useLocale } from "@/hooks/useLocale";
import { GAME_PAGES } from "@/lib/gameTranslations";
import GameInfoPage from "@/components/GameInfoPage";

export default function TableGames() {
  const locale = useLocale();
  const t = GAME_PAGES.table[locale];
  return <GameInfoPage title={t.title} description={t.description} keywords="tekkabuzz table games, taka buzz table, online table games bd" canonical="https://www.tekkabuzz.win/table" heading={t.heading} ctaText={t.ctaText} ctaLink="/go/table-games" content={t.content} />;
}
