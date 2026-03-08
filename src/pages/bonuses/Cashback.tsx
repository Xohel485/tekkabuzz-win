import InfoPage from "@/components/InfoPage";
import { useLocale } from "@/hooks/useLocale";
import { BONUS_PAGES } from "@/lib/gameTranslations";

export default function CashbackBonus() {
  const locale = useLocale();
  const t = BONUS_PAGES.cashback[locale];
  return (
    <InfoPage title={t.title} description={t.description} keywords="tekkabuzz cashback, taka buzz cashback, টেক্কাবাজ ক্যাশব্যাক" canonical="https://www.tekkabuzz.win/bonuses/cashback" heading={t.heading}>
      {t.content.map((p, i) => <p key={i}>{p}</p>)}
    </InfoPage>
  );
}
