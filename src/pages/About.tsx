import InfoPage from "@/components/InfoPage";
import { useLocale } from "@/hooks/useLocale";
import { PAGES } from "@/lib/translations";

export default function About() {
  const locale = useLocale();
  const t = PAGES.about[locale];
  return (
    <InfoPage title={t.title} description={t.description} keywords="about tekkabuzz, about taka buzz, about tekka buzz, টেক্কাবাজ সম্পর্কে" canonical="https://www.tekkabuzz.win/about" heading={t.heading}>
      {t.content.map((p, i) => <p key={i}>{p}</p>)}
    </InfoPage>
  );
}
