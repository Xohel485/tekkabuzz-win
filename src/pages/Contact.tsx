import InfoPage from "@/components/InfoPage";
import { useLocale } from "@/hooks/useLocale";
import { PAGES } from "@/lib/translations";

export default function Contact() {
  const locale = useLocale();
  const t = PAGES.contact[locale];
  return (
    <InfoPage title={t.title} description={t.description} keywords="tekkabuzz contact, tekka buzz support, taka buzz help, টেক্কাবাজ যোগাযোগ" canonical="https://www.tekkabuzz.win/contact" heading={t.heading}>
      {t.content.map((p, i) => <p key={i}>{p}</p>)}
    </InfoPage>
  );
}
