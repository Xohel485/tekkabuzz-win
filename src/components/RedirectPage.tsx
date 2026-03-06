import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { redirectWithFailover, D1 } from "@/lib/affiliateLinks";

interface Props {
  seoTitle: string;
  seoDesc: string;
  seoKeywords: string;
  canonicalPath: string;
  affiliatePath?: string;
  primaryDomain?: string;
  fixedUrl?: string;
  useFailover?: boolean;
}

const LANGS = [
  { key: "en", dir: "ltr" as const, msg: (kw: string) => `Redirecting you to TekkaBuzz ${kw}...` },
  { key: "bn", dir: "ltr" as const, msg: (kw: string) => `আপনাকে TekkaBuzz ${kw}-এ নিয়ে যাওয়া হচ্ছে...` },
  { key: "ur", dir: "rtl" as const, msg: (kw: string) => `آپ کو TekkaBuzz ${kw} پر لے جایا جا رہا ہے...` },
];

export default function RedirectPage({
  seoTitle, seoDesc, seoKeywords, canonicalPath,
  affiliatePath, primaryDomain, fixedUrl, useFailover = true,
}: Props) {
  const [progress, setProgress] = useState(0);
  const [langIdx, setLangIdx] = useState(0);
  const displayName = seoTitle.replace("TekkaBuzz ", "");

  useEffect(() => {
    const langTimer = setInterval(() => setLangIdx(i => (i + 1) % 3), 500);
    const progTimer = setInterval(() => setProgress(p => Math.min(p + 4, 100)), 60);
    const redirTimer = setTimeout(async () => {
      if (fixedUrl) { window.location.href = fixedUrl; return; }
      if (!useFailover && affiliatePath && primaryDomain) {
        window.location.href = `${primaryDomain}${affiliatePath}`; return;
      }
      if (affiliatePath) {
        await redirectWithFailover(affiliatePath, primaryDomain || D1);
      }
    }, 1500);

    return () => {
      clearInterval(langTimer);
      clearInterval(progTimer);
      clearTimeout(redirTimer);
    };
  }, [affiliatePath, fixedUrl, primaryDomain, useFailover]);

  const lang = LANGS[langIdx];

  return (
    <>
      <Helmet>
        <title>{seoTitle} | TekkaBuzz -- Bangladesh Online Casino</title>
        <meta name="description" content={seoDesc} />
        <meta name="keywords" content={seoKeywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.tekkabuzz.win${canonicalPath}`} />
        <meta property="og:title" content={`${seoTitle} | TekkaBuzz`} />
        <meta property="og:url" content={`https://www.tekkabuzz.win${canonicalPath}`} />
        <meta property="og:image" content="https://i.ibb.co.com/VpJLpZpv/Tekka-Buzz-hero.png" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col items-center justify-center font-body text-foreground p-8">
        <img
          src="https://i.ibb.co.com/nMLNBNcr/tekabuzz-logo.webp"
          alt="TekkaBuzz"
          className="h-14 mb-6 object-contain"
          loading="eager"
        />

        <h1 className="text-2xl font-extrabold text-primary mb-1 tracking-wide text-center font-heading">
          {seoTitle}
        </h1>
        <p className="text-muted-foreground text-sm mb-8">
          Bangladesh's #1 Online Casino
        </p>

        <div className="w-[300px] h-[3px] bg-border rounded-full mb-7 overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p
          className="text-muted-foreground text-base text-center max-w-[340px] leading-relaxed min-h-[3.5rem]"
          dir={lang.dir}
          style={{ fontFamily: lang.key === "ur" ? "serif" : "inherit" }}
        >
          {lang.msg(displayName)}
        </p>

        <div className="flex gap-2 mt-12 flex-wrap justify-center opacity-45">
          {["https://i.ibb.co.com/fVhtjjg9/bKash.webp",
            "https://i.ibb.co.com/qFMsC9SQ/Nagad.webp",
            "https://i.ibb.co.com/4nzCbKjg/rocket.webp",
            "https://i.ibb.co.com/dw52WPqG/upay.webp"].map((src, i) => (
            <img key={i} src={src} alt="payment method" className="h-[18px] object-contain" loading="lazy" />
          ))}
        </div>

        <div className="absolute -left-[9999px] -top-[9999px] text-[1px] text-transparent select-none" aria-hidden="true">
          taka buzz tekka buzz tekkabuzz tkkabuzz tekkabaz takkabuzz takka buzz
          tekabuzz teka buzz teekabuzz tekk buzz takkabuz takkbuzz
          tekka baji tekka buzz login tekkabuzz login tekka buzz bet
          tekka buzz affiliate tekkabuzz affiliate taka alliance gaming
          online casino bangladesh bkash casino nagad casino
        </div>
      </div>
    </>
  );
}
