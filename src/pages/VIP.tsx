import InfoPage from "@/components/InfoPage";
import { useLocale } from "@/hooks/useLocale";
import { PAGES } from "@/lib/translations";

export default function VIP() {
  const locale = useLocale();
  const t = PAGES.vip[locale];
  return (
    <InfoPage title={t.title} description={t.description} keywords="tekkabuzz vip, taka buzz vip, tekka buzz vip program, টেক্কাবাজ ভিআইপি" canonical="https://www.tekkabuzz.win/vip" heading={t.heading}>
      {t.content.map((p, i) => <p key={i}>{p}</p>)}
    </InfoPage>
  );
}
