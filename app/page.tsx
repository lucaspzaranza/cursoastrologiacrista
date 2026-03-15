import type { Metadata } from "next";
import Image from "next/image";

// ─── METADATA ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Curso de Astrologia Cristã",
  description: "A Astrologia que a modernidade distorceu — restaurada à luz da fé.",
};

// ─── COURSE DATA ──────────────────────────────────────────────────────────────

const courseInfo = {
  title: "Curso de Astrologia Cristã",
  subtitle: "A Astrologia que a modernidade distorceu — restaurada à luz da fé.",
  ctaLabel: "Faça sua inscrição",
  ctaUrl: "https://sua-pagina-de-vendas.com", // ← replace with real URL
};

const instructor = {
  name: "Lucas Zaranza",
  photoUrl: "/instructor.jpg", // ← place photo at /public/instructor.jpg
  bio: `Sou Lucas Zaranza, programador, músico e católico que passou anos evitando a Astrologia por acreditar que ela e a fé não podiam coexistir. Foi só em 2021, ao ter contato com uma abordagem intelectualmente séria do tema, que percebi que o problema nunca foi a Astrologia em si, foi a forma como ela foi distorcida e popularizada. Em quase cinco anos como astrólogo, atendi pessoas de todo o Brasil e vi de perto como esse sistema pode ajudar alguém a se entender melhor, e a enxergar com mais clareza o que Deus inscreveu na Criação através dos planetas, signos e estrelas.


Este curso nasceu da necessidade de um espaço sério, seguro e aprofundado onde cristãos possam finalmente entender o que é a Astrologia de verdade: sem charlatanismo, sem esoterismo vazio, e sem precisar abrir mão da fé. Se você tem curiosidade sobre o tema, este é o lugar certo.`,
};

const modules = [
  {
    number: "01",
    title: "Título do Módulo 1",
    description:
      "Breve descrição do que será abordado neste módulo. Explique os principais temas e o que o aluno vai aprender.",
  },
  {
    number: "02",
    title: "Título do Módulo 2",
    description:
      "Breve descrição do que será abordado neste módulo. Explique os principais temas e o que o aluno vai aprender.",
  },
  {
    number: "03",
    title: "Título do Módulo 3",
    description:
      "Breve descrição do que será abordado neste módulo. Explique os principais temas e o que o aluno vai aprender.",
  },
  {
    number: "04",
    title: "Título do Módulo 4",
    description:
      "Breve descrição do que será abordado neste módulo. Explique os principais temas e o que o aluno vai aprender.",
  },
  {
    number: "05",
    title: "Título do Módulo 5",
    description:
      "Breve descrição do que será abordado neste módulo. Explique os principais temas e o que o aluno vai aprender.",
  },
  {
    number: "06",
    title: "Título do Módulo 6",
    description:
      "Breve descrição do que será abordado neste módulo. Explique os principais temas e o que o aluno vai aprender.",
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

function CtaButton({ label, href, size = "md" }: CtaButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 bg-linear-to-br from-[#c9a84c] to-[#e8c96a] text-[#060d1c] font-medium tracking-widest uppercase rounded-[4px] shadow-[0_4px_24px_rgba(201,168,76,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,168,76,0.4)] hover:brightness-105";

  const sizeClasses =
    size === "lg" ? "text-[0.9rem] px-10 py-4" : "text-[0.85rem] px-8 py-3.5";

  return (
    <a href={href} className={`${baseClasses} ${sizeClasses} group`}>
      {label}
      <span
        className="transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      >
        →
      </span>
    </a>
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
        {/* Portrait image — full width, natural aspect ratio, no crop */}
        <div className="relative aspect-[2481/3561] w-full">
          <Image
            src="/hero.jpg"
            alt="Curso de Astrologia Cristã"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Gradient starts only at the bottom 30% so more image shows */}
          <div className="absolute inset-x-0 bottom-0 h-[30%] bg-linear-to-t from-[#080e1f] via-[#080e1f]/85 to-transparent" />
        </div>

        {/* Text block pulled up with negative margin to overlap the image bottom */}
        <div className="relative z-10 -mt-16 px-7 pb-10 pt-6">
          <p className="mb-4 text-[0.65rem] tracking-[0.3em] uppercase text-[#c9a84c]">
            ✦ Uma jornada de fé e conhecimento ✦
          </p>
          <h1 className="font-display mb-4 text-[2.4rem] font-normal leading-[1.05] text-[#e8e4d8]">
            {courseInfo.title}
          </h1>
          <div className="mb-4 h-px w-10 bg-[#c9a84c] opacity-60" />
          <p className="mb-7 text-[0.97rem] font-light leading-relaxed text-[#e8e4d8]/75">
            {courseInfo.subtitle}
          </p>
          <CtaButton label={courseInfo.ctaLabel} href={courseInfo.ctaUrl} size="lg" />
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
          <p className="mb-10 animate-[fadeUp_0.8s_ease_0.6s_both] max-w-[42ch] text-[clamp(1rem,1.4vw,1.15rem)] font-light leading-relaxed text-[#e8e4d8]/75">
            {courseInfo.subtitle}
          </p>
          <div className="animate-[fadeUp_0.8s_ease_0.8s_both]">
            <CtaButton label={courseInfo.ctaLabel} href={courseInfo.ctaUrl} size="lg" />
          </div>
        </div>

        {/* RIGHT: portrait image
            The image wrapper starts at top-20 (80px down), clipping the top of
            the image while keeping its left-anchored horizontal position.      */}
        {/* overflow-hidden clips the 120% tall inner div, preventing bleed into the next section */}
        <div className="relative h-full overflow-hidden">
          <div className="relative h-[120%] bottom-30">
            <Image
              src="/hero.jpg"
              alt="Curso de Astrologia Cristã"
              fill
              priority
              sizes="50vw"
              className="object-cover object-top-left"
            />
          </div>
          {/* Narrow left fade — softens the seam between the two columns */}
          <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[#080e1f] to-transparent" />
          {/* Bottom fade into next section */}
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
      <div className="mx-auto max-w-[1100px] px-6 md:px-12">
        <div className="grid items-center gap-10 grid-cols-1 md:grid-cols-[1fr_1.6fr] md:gap-20">

          {/* Photo */}
          <div className="relative mx-auto w-full max-w-[260px] aspect-square md:aspect-[3/4] md:max-w-[360px]">
            <div className="absolute -inset-2 rounded-[6px] border border-[rgba(201,168,76,0.25)]" />
            <Image
              src={instructor.photoUrl}
              alt={instructor.name}
              fill
              sizes="(max-width: 768px) 260px, 360px"
              className="relative z-10 rounded-[4px] object-cover object-top"
            />
            <div className="absolute -bottom-5 left-1/2 z-0 h-14 w-[70%] -translate-x-1/2 rounded-full bg-[#c9a84c] opacity-[0.18] blur-[32px]" />
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
            {bioParagraphs.map((paragraph, index) => (
              <p key={index} className="mb-4 text-[0.97rem] text-[#e8e4d8]/75">
                {paragraph}
              </p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── MODULE CARD ──────────────────────────────────────────────────────────────

function ModuleCard({ number, title, description }: ModuleCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[6px] border border-[rgba(201,168,76,0.12)] bg-[#0d1630] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(201,168,76,0.3)] hover:bg-[#111d3a]">
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
      <div className="mx-auto max-w-[1100px] px-6 md:px-12">

        <div className="mx-auto mb-14 max-w-[55ch] text-center">
          <span className="mb-3 block text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#c9a84c]">
            O que você vai aprender
          </span>
          <h2 className="font-display mb-4 text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.15] text-[#e8e4d8]">
            Ementa do Curso
          </h2>
          <p className="text-[0.97rem] text-[#8a8fa8]">
            Um percurso completo que une sabedoria bíblica e conhecimento
            astrológico, organizado em seis módulos transformadores.
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
      <div className="mx-auto max-w-[1100px] px-6 md:px-12">
        <div className="mx-auto flex max-w-[600px] flex-col items-center gap-5">
          <p className="text-[0.8rem] tracking-[0.4em] text-[#c9a84c]/70" aria-hidden="true">
            ✦ ✧ ✦ ✧ ✦
          </p>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-normal leading-[1.15] text-[#e8e4d8]">
            Pronto para iniciar sua jornada?
          </h2>
          <p className="max-w-[48ch] text-[0.97rem] text-[#8a8fa8]">
            Garanta sua vaga no Curso de Astrologia Cristã e descubra como os
            astros falam sobre a sua história de fé.
          </p>
          <CtaButton
            label={courseInfo.ctaLabel}
            href={courseInfo.ctaUrl}
            size="lg"
          />
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <InstructorSection />
      <SyllabusSection />
      <FinalCtaSection />
    </main>
  );
}