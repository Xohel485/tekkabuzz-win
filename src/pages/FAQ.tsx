import InfoPage from "@/components/InfoPage";
import { useLocale } from "@/hooks/useLocale";
import { PAGES } from "@/lib/translations";

export default function FAQ() {
  const locale = useLocale();
  const t = PAGES.faq[locale];
  return (
    <InfoPage title={t.title} description={t.description} keywords="tekkabuzz faq, tekka buzz help, taka buzz questions, টেক্কাবাজ প্রশ্ন" canonical="https://www.tekkabuzz.win/faq" heading={t.heading}>
      {t.content.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
    </InfoPage>
  );
}
