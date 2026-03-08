import InfoPage from "@/components/InfoPage";
import { useLocale } from "@/hooks/useLocale";
import { PAGES } from "@/lib/translations";

export default function Privacy() {
  const locale = useLocale();
  const t = PAGES.privacy[locale];
  return (
    <InfoPage title={t.title} description={t.description} keywords="tekkabuzz privacy, tekka buzz privacy policy, টেক্কাবাজ গোপনীয়তা" canonical="https://www.tekkabuzz.win/privacy" heading={t.heading}>
      {t.content.map((p, i) => <p key={i}>{p}</p>)}
    </InfoPage>
  );
}
