import InfoPage from "@/components/InfoPage";
import { useLocale } from "@/hooks/useLocale";
import { BONUS_PAGES } from "@/lib/gameTranslations";

export default function WelcomeBonus() {
  const locale = useLocale();
  const t = BONUS_PAGES.welcome[locale];
  return (
    <InfoPage title={t.title} description={t.description} keywords="tekkabuzz welcome bonus, taka buzz bonus, টেক্কাবাজ বোনাস" canonical="https://www.tekkabuzz.win/bonuses/welcome" heading={t.heading}>
      {t.content.map((p, i) => <p key={i}>{p}</p>)}
    </InfoPage>
  );
}
