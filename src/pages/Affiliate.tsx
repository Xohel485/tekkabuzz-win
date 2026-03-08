import InfoPage from "@/components/InfoPage";
import { useLocale } from "@/hooks/useLocale";
import { BONUS_PAGES } from "@/lib/gameTranslations";

export default function Affiliate() {
  const locale = useLocale();
  const t = BONUS_PAGES.affiliate[locale];
  return (
    <InfoPage title={t.title} description={t.description} keywords="tekkabuzz affiliate, tekka buzz affiliate, taka buzz affiliate, টেক্কাবাজ অ্যাফিলিয়েট" canonical="https://www.tekkabuzz.win/affiliate" heading={t.heading}>
      {t.content.map((p, i) => <p key={i}>{p}</p>)}
    </InfoPage>
  );
}
