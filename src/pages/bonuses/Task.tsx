import InfoPage from "@/components/InfoPage";
import { useLocale } from "@/hooks/useLocale";
import { BONUS_PAGES } from "@/lib/gameTranslations";

export default function TaskBonus() {
  const locale = useLocale();
  const t = BONUS_PAGES.task[locale];
  return (
    <InfoPage title={t.title} description={t.description} keywords="tekkabuzz task bonus, taka buzz daily bonus, টেক্কাবাজ টাস্ক" canonical="https://www.tekkabuzz.win/bonuses/task" heading={t.heading}>
      {t.content.map((p, i) => <p key={i}>{p}</p>)}
    </InfoPage>
  );
}
