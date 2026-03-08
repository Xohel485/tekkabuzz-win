import { useLocale } from "@/hooks/useLocale";
import { GAME_PAGES } from "@/lib/gameTranslations";
import GameInfoPage from "@/components/GameInfoPage";

export default function Sports() {
  const locale = useLocale();
  const t = GAME_PAGES.sports[locale];
  return <GameInfoPage title={t.title} description={t.description} keywords="tekka buzz bet, tekkabuzz sports, taka buzz bet, cricket betting bangladesh" canonical="https://www.tekkabuzz.win/sports" heading={t.heading} ctaText={t.ctaText} ctaLink="/go/sports" content={t.content} />;
}
