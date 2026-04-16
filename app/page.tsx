import type { Metadata } from "next";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ConstellationBackground from "@/components/ConstellationBackground";

// ─── METADATA ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Curso de Astrologia Cristã",
  description: "A Astrologia que a modernidade distorceu — restaurada à luz da fé.",
};

// ─── COURSE DATA ──────────────────────────────────────────────────────────────

const courseInfoSales = {
  title: "Curso de Astrologia Cristã",
  subtitle: "A Astrologia que a modernidade distorceu — restaurada à luz da fé.",
  ctaLabel: "Faça a sua inscrição",
  ctaUrl: "https://pay.hotmart.com/C105405966S?bid=1776379372845", // ← replace with Hotmart URL when ready
};

const courseInfo = {
  title: "Curso de Astrologia Cristã",
  subtitle: "A Astrologia que a modernidade distorceu — restaurada à luz da fé.",
  ctaLabel: "Entre no grupo do WhatsApp",
  ctaUrl: "https://chat.whatsapp.com/IbIeq2g2Mc74N40XDYKWku?mode=gi_t",
  price: "R$ 147",
  installments: "ou em até 3x no cartão",
};

const instructor = {
  name: "Lucas Zaranza",
  photoUrl: "/instructor.jpg", // ← place photo at /public/instructor.jpg
  bio: `Sou Lucas Zaranza, programador que desenvolveu o próprio site de Astrologia, o Zazastro (zazastro.com.br), e músico por hobby. Católico de berço que passou anos evitando a Astrologia por acreditar que ela e a fé cristã eram incompatíveis. Foi só em 2021, ao ter contato com uma abordagem intelectualmente séria do tema, que percebi que o problema nunca foi a Astrologia em si, foi a forma como ela foi distorcida e popularizada. Em quase cinco anos como astrólogo, atendi pessoas de todo o Brasil e vi de perto como esse sistema pode ajudar alguém a se entender melhor, e a enxergar com mais clareza o que Deus inscreveu na Criação através dos planetas, signos e estrelas.

Este curso nasceu da necessidade de um espaço sério, seguro e aprofundado onde cristãos possam finalmente entender o que é a Astrologia de verdade: sem charlatanismo, sem esoterismo vazio, e sem precisar abrir mão da fé. Se você tem curiosidade sobre o tema, este é o lugar certo.`,
};

const modules = [
  {
    number: "01",
    title: "Introdução e Conceitos Fundamentais",
    description:
      "O módulo mais denso do curso. De onde vem a Astrologia e o que ela realmente é? Partimos da experiência originária do homem diante do cosmos para construir uma base sólida: a hierarquia das causas, o papel dos símbolos celestes e o que a modernidade distorceu ao tentar explicar o fenômeno astrológico pelos seus próprios termos.",
  },
  {
    number: "02",
    title: "Mecânica Básica Celeste",
    description:
      "Entenda o modelo cosmológico das esferas, os sete planetas tradicionais, o Zodíaco, as 12 casas, as estrelas fixas e os aspectos. Uma imersão visual e conceitual na arquitetura do céu, com recursos em 2D e 3D para tornar o abstrato concreto.",
  },
  {
    number: "03",
    title: "Astrologia e Igreja Católica",
    description:
      "O ponto nevrálgico do curso. Aqui você vai entender o que o Catecismo realmente diz, o que santos e papas pensavam sobre a Astrologia, o que os Concílios condenaram e o que não condenaram, e por que tanta confusão ainda persiste nos meios católicos.",
  },
  {
    number: "04",
    title: "Astrologia na Prática",
    description:
      "Saímos da teoria e entramos na leitura real de mapas. Exemplos concretos de Astrologia Horária e a análise do mapa natal de um santo muito querido nos dias atuais mostram como esse conhecimento funciona quando aplicado com seriedade e critério.",
  },
  {
    number: "05",
    title: "Colhendo os Frutos da Astrologia",
    description:
      "O que você faz com o que aprendeu? Este módulo explora as vias que a Astrologia abre: autoconhecimento, crescimento intelectual, amadurecimento humano, libertação do cientificismo e, no limite, uma forma de se aproximar mais de Deus.",
  },
  {
    number: "06",
    title: "Conclusão e Considerações Pessoais",
    description:
      "A Astrologia é tão perigosa assim? Para quem ela é, e para quem ela não é? O curso encerra com honestidade: sem promessas exageradas, sem missão salvacionista, mas com a clareza de quem passou anos estudando e acredita no valor do que ensina.",
  },
];

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface CtaButtonProps {
  label: string;
  href: string;
  size?: "md" | "lg";
}

interface ModuleCardProps {
  number: string;
  title: string;
  description: string;
}

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────

// ─── CTA BUTTON (SALES) ───────────────────────────────────────────────────────
// Active button — links to Hotmart sales page.
// When ready: update courseInfoSales.ctaUrl with the Hotmart link.
function CtaButtonSales({ label, href, size = "md" }: CtaButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 bg-linear-to-br from-[#c9a84c] to-[#e8c96a] text-[#060d1c] font-medium tracking-widest uppercase rounded-[4px] shadow-[0_4px_24px_rgba(201,168,76,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,168,76,0.4)] hover:brightness-105";

  const sizeClasses =
    size === "lg" ? "text-[0.9rem] px-10 py-4" : "text-[0.85rem] px-8 py-3.5";

  return (
    <a href={href} className={`${baseClasses} ${sizeClasses} group`}>
      {label}
      <ChevronRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </a>
  );
}

// ─── CTA BUTTON (WHATSAPP) ────────────────────────────────────────────────────
// Kept for when reverting to WhatsApp group promotion.
// To reactivate: uncomment CtaButton calls below and comment out CtaButtonSales.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CtaWhatsAppButton({ label, href, size = "md" }: CtaButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center text-center gap-2 w-full sm:w-auto bg-[#25d366] text-white font-medium tracking-widest uppercase rounded-[4px] shadow-[0_4px_24px_rgba(37,211,102,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(37,211,102,0.45)] hover:brightness-105";

  const sizeClasses =
    size === "lg" ? "text-[0.9rem] px-10 py-4" : "text-[0.85rem] px-8 py-3.5";

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${sizeClasses} group`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[1.1em] w-[1.1em] shrink-0"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
      <ChevronRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </a>
  );
}

// ─── PRICE DISPLAY ────────────────────────────────────────────────────────────

interface PriceDisplayProps {
  align?: "start" | "center";
}

function PriceDisplay({ align = "start" }: PriceDisplayProps) {
  return (
    <div className={`flex flex-col gap-1 ${align === "center" ? "items-center" : "items-start"}`}>
      <span className="font-display text-[3.5rem] font-normal leading-none text-[#e8c96a]">
        {courseInfo.price}
      </span>
      <span className="text-[0.9rem] font-light tracking-wide text-[#e8e4d8]/50">
        {courseInfo.installments}
      </span>
    </div>
  );
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative bg-[#080e1f]">

      {/* Subtle radial glow behind the text column — desktop only */}
      <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(ellipse_at_15%_50%,rgba(201,168,76,0.05)_0%,transparent_55%)] md:block" />

      {/* ── MOBILE: image fills width, text overlaid at the bottom ─────────── */}
      <div className="relative md:hidden">
        <div className="relative aspect-2481/3561 w-full">
          <Image
            src="/hero.jpg"
            alt="Curso de Astrologia Cristã"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-[30%] bg-linear-to-t from-[#080e1f] via-[#080e1f]/85 to-transparent" />
        </div>

        <div className="relative z-10 -mt-16 px-7 pb-10 pt-6">
          <p className="mb-4 text-[0.65rem] tracking-[0.3em] uppercase text-[#c9a84c]">
            ✦ Uma jornada de fé e conhecimento ✦
          </p>
          <h1 className="font-display mb-4 text-[2.4rem] font-normal leading-[1.05] text-[#e8e4d8]">
            {courseInfo.title}
          </h1>
          <div className="mb-4 h-px w-10 bg-[#c9a84c] opacity-60" />
          <p className="mb-3 text-[0.97rem] font-light leading-relaxed text-[#e8e4d8]/75">
            {courseInfo.subtitle}
          </p>

          <div className="animate-[fadeUp_0.8s_ease_0.8s_both] h-40 w-fit flex flex-col gap-y-4">
            {/* WhatsApp button — uncomment when reverting to group promotion:   */}
            {/* <CtaWhatsAppButton label={courseInfo.ctaLabel} href={courseInfo.ctaUrl} size="lg" /> */}
            {/* <PriceDisplay /> */}
            <CtaButtonSales label={courseInfoSales.ctaLabel} href={courseInfoSales.ctaUrl} size="lg" />
          </div>
        </div>
      </div>

      {/* ── DESKTOP: two columns 1fr 1fr, text left | image right ───────────── */}
      <div className="relative hidden h-screen md:grid md:grid-cols-2">

        {/* LEFT: text content */}
        <div className="relative z-10 flex flex-col justify-center px-12 py-24 lg:px-24">
          <p className="mb-5 animate-[fadeUp_0.8s_ease_0.2s_both] text-[0.7rem] tracking-[0.3em] uppercase text-[#c9a84c]">
            ✦ Uma jornada de fé e conhecimento ✦
          </p>
          <h1 className="font-display mb-6 animate-[fadeUp_0.8s_ease_0.4s_both] text-[clamp(2.6rem,4.5vw,5rem)] font-normal leading-[1.05] text-[#e8e4d8]">
            {courseInfo.title}
          </h1>
          <div className="mb-6 h-px w-14 animate-[fadeUp_0.8s_ease_0.5s_both] bg-[#c9a84c] opacity-60" />
          <p className="mb-4 animate-[fadeUp_0.8s_ease_0.6s_both] max-w-[42ch] text-[clamp(1rem,1.4vw,1.15rem)] font-light leading-relaxed text-[#e8e4d8]/75">
            {courseInfo.subtitle}
          </p>
          <div className="animate-[fadeUp_0.8s_ease_0.8s_both] h-40 w-fit flex flex-col gap-y-4">
            {/* WhatsApp button — uncomment when reverting to group promotion: */}
            {/* <CtaWhatsAppButton label={courseInfo.ctaLabel} href={courseInfo.ctaUrl} size="lg" /> */}
            {/* <PriceDisplay /> */}
            <CtaButtonSales label={courseInfoSales.ctaLabel} href={courseInfoSales.ctaUrl} size="lg" />
          </div>
        </div>

        {/* RIGHT: portrait image */}
        <div className="relative h-full overflow-hidden">
          <div className="relative h-[120%] bottom-36">
            <Image
              src="/hero.jpg"
              alt="Curso de Astrologia Cristã"
              fill
              priority
              sizes="50vw"
              className="object-cover object-top-left"
            />
          </div>
          <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[#080e1f] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#080e1f] to-transparent" />
        </div>

      </div>

    </section>
  );
}

// ─── INSTRUCTOR SECTION ───────────────────────────────────────────────────────

function InstructorSection() {
  const bioParagraphs = instructor.bio.split("\n\n");

  return (
    <section
      id="instructor"
      className="border-t border-[#c9a84c]/10 bg-linear-to-b from-[#080e1f] to-[#0d1630] py-[clamp(4rem,8vw,8rem)]"
    >
      <div className="mx-auto max-w-275] px-6 md:px-12">
        <div className="grid items-center gap-10 grid-cols-1 md:grid-cols-[1fr_1.6fr] md:gap-20">

          {/* Photo */}
          <div className="relative mx-auto w-full max-w-65 aspect-square md:aspect-3/4 md:max-w-90">
            <div className="absolute -inset-2 rounded-md border border-[rgba(201,168,76,0.25)]" />
            <Image
              src={instructor.photoUrl}
              alt={instructor.name}
              fill
              sizes="(max-width: 768px) 260px, 360px"
              className="relative z-10 rounded-sm object-cover object-top"
              unoptimized
            />
          </div>

          {/* Text */}
          <div>
            <span className="mb-3 block text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#c9a84c]">
              Seu guia nessa jornada
            </span>
            <h2 className="font-display mb-4 text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] text-[#e8e4d8]">
              {instructor.name}
            </h2>
            <div className="mb-6 h-px w-12 bg-[#c9a84c] opacity-60" />
            {bioParagraphs.map((paragraph, index) => {
              if (index === 0) {
                const [before, after] = paragraph.split("zazastro.com.br), ");
                return (
                  <p key={index} className="mb-4 text-[0.97rem] text-[#e8e4d8]/75">
                    {before}
                    <a
                      href="https://www.zazastro.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c9a84c] underline underline-offset-2 hover:text-[#e8c96a] transition-colors duration-200"
                    >
                      zazastro.com.br
                    </a>
                    ), {after}
                  </p>
                );
              }
              return (
                <p key={index} className="mb-4 text-[0.97rem] text-[#e8e4d8]/75">
                  {paragraph}
                </p>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── MODULE CARD ──────────────────────────────────────────────────────────────

function ModuleCard({ number, title, description }: ModuleCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-md border border-[rgba(201,168,76,0.12)] bg-[#0d1630] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(201,168,76,0.3)] hover:bg-[#111d3a]">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[rgba(201,168,76,0.35)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="font-display mb-3 block text-[2.8rem] font-light leading-none text-[rgba(201,168,76,0.25)] transition-colors duration-300 group-hover:text-[rgba(201,168,76,0.45)]">
        {number}
      </span>
      <h3 className="font-display mb-3 text-[1.2rem] font-semibold leading-[1.3] text-[#e8e4d8]">
        {title}
      </h3>
      <p className="text-[0.88rem] leading-[1.65] text-[#8a8fa8]">
        {description}
      </p>
    </div>
  );
}

// ─── SYLLABUS SECTION ─────────────────────────────────────────────────────────

function SyllabusSection() {
  return (
    <section id="syllabus" className="bg-[#080e1f] py-[clamp(4rem,8vw,8rem)]">
      <div className="mx-auto max-w-350 px-6 md:px-12">
        <div className="mx-auto mb-14 max-w-[55ch] text-center">
          <span className="mb-3 block text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#c9a84c]">
            O que você vai aprender
          </span>
          <h2 className="font-display mb-4 text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] text-[#e8e4d8]">
            Ementa do Curso
          </h2>
          <p className="text-[0.97rem] text-[#8a8fa8]">
            Seis etapas para redescobrir a Astrologia
            e vivê-la com liberdade dentro da fé cristã.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard
              key={module.number}
              number={module.number}
              title={module.title}
              description={module.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FINAL CTA SECTION ────────────────────────────────────────────────────────

function FinalCtaSection() {
  return (
    <section className="border-t border-[#c9a84c]/10 bg-linear-to-b from-[#080e1f] to-[#060d1c] py-[clamp(4rem,8vw,8rem)] text-center">
      <div className="mx-auto max-w-275 px-6 md:px-12">
        <div className="mx-auto flex max-w-150 flex-col items-center gap-5">
          <p className="text-[0.8rem] tracking-[0.4em] text-[#c9a84c]/70" aria-hidden="true">
            ✦ ✧ ✦ ✧ ✦
          </p>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-normal leading-[1.15] text-[#e8e4d8]">
            Pronto para iniciar sua jornada?
          </h2>
          <p className="max-w-[60ch] text-[0.97rem] text-[#8a8fa8]">
            Inscreva-se e dê o primeiro passo para entender a Astrologia como ela realmente é: séria, profunda e compatível com sua fé.
          </p>
          {/* WhatsApp button — uncomment when reverting to group promotion:   */}
          {/* <CtaWhatsAppButton label={courseInfo.ctaLabel} href={courseInfo.ctaUrl} size="lg" /> */}
          <PriceDisplay align="center" />
          <CtaButtonSales label={courseInfoSales.ctaLabel} href={courseInfoSales.ctaUrl} size="lg" />
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <ConstellationBackground />
      <main>
        <HeroSection />
        <InstructorSection />
        <SyllabusSection />
        <FinalCtaSection />
      </main>
    </>
  );
}