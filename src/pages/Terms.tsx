import InfoPage from "@/components/InfoPage";
import { useLocale } from "@/hooks/useLocale";
import { PAGES } from "@/lib/translations";

export default function Terms() {
  const locale = useLocale();
  const t = PAGES.terms[locale];
  return (
    <InfoPage title={t.title} description={t.description} keywords="tekkabuzz terms, tekka buzz terms of service, টেক্কাবাজ শর্তাবলী" canonical="https://www.tekkabuzz.win/terms" heading={t.heading}>
      {t.content.map((p, i) => <p key={i}>{p}</p>)}
    </InfoPage>
  );
}
