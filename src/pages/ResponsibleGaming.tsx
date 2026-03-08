import InfoPage from "@/components/InfoPage";
import { useLocale } from "@/hooks/useLocale";
import { PAGES } from "@/lib/translations";

export default function ResponsibleGaming() {
  const locale = useLocale();
  const t = PAGES["responsible-gaming"][locale];
  return (
    <InfoPage title={t.title} description={t.description} keywords="tekkabuzz responsible gaming, responsible gambling bd, টেক্কাবাজ দায়িত্বশীল গেমিং" canonical="https://www.tekkabuzz.win/responsible-gaming" heading={t.heading}>
      {t.content.map((p, i) => <p key={i}>{p}</p>)}
    </InfoPage>
  );
}
