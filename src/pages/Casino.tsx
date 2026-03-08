import { useLocale } from "@/hooks/useLocale";
import { GAME_PAGES } from "@/lib/gameTranslations";
import GameInfoPage from "@/components/GameInfoPage";

export default function Casino() {
  const locale = useLocale();
  const t = GAME_PAGES.casino[locale];
  return <GameInfoPage title={t.title} description={t.description} keywords="tekkabuzz casino, tekka buzz casino, taka buzz casino, tkkabuzz casino, live casino bangladesh" canonical="https://www.tekkabuzz.win/casino" heading={t.heading} ctaText={t.ctaText} ctaLink="/go/casino" content={t.content} />;
}
