import { useLocale } from "@/hooks/useLocale";
import { GAME_PAGES } from "@/lib/gameTranslations";
import GameInfoPage from "@/components/GameInfoPage";

export default function Slots() {
  const locale = useLocale();
  const t = GAME_PAGES.slots[locale];
  return <GameInfoPage title={t.title} description={t.description} keywords="tekkabuzz slots, taka buzz slots, JILI slots bd, PG Soft bangladesh" canonical="https://www.tekkabuzz.win/slots" heading={t.heading} ctaText={t.ctaText} ctaLink="/go/slots" content={t.content} />;
}
