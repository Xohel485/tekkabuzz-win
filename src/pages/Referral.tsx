import InfoPage from "@/components/InfoPage";
import { useLocale } from "@/hooks/useLocale";
import { PAGES } from "@/lib/translations";

export default function Referral() {
  const locale = useLocale();
  const t = PAGES.referral[locale];
  return (
    <InfoPage title={t.title} description={t.description} keywords="tekkabuzz referral, tekka buzz referral code, taka buzz referral, টেক্কাবাজ রেফারেল" canonical="https://www.tekkabuzz.win/referral" heading={t.heading}>
      {t.content.map((p, i) => <p key={i}>{p}</p>)}
    </InfoPage>
  );
}
