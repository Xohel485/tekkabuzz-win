import InfoPage from "@/components/InfoPage";
import { useLocale } from "@/hooks/useLocale";
import { BONUS_PAGES } from "@/lib/gameTranslations";

export default function ReferralBonus() {
  const locale = useLocale();
  const t = BONUS_PAGES["referral-bonus"][locale];
  return (
    <InfoPage title={t.title} description={t.description} keywords="tekkabuzz referral bonus, taka buzz referral, টেক্কাবাজ রেফারেল" canonical="https://www.tekkabuzz.win/bonuses/referral" heading={t.heading}>
      {t.content.map((p, i) => <p key={i}>{p}</p>)}
    </InfoPage>
  );
}
