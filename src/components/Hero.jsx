import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { PERSONAL } from '../data/constants';
import { GithubIcon, WhatsappIcon } from './BrandIcons';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* Декоративный фон */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary-400/25 blur-3xl sm:left-1/4" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] opacity-40 [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-4 py-1.5 text-sm font-medium text-primary-600 shadow-sm">
            <Sparkles size={16} />
            {PERSONAL.role}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Привет! Я{' '}
            <span className="bg-gradient-to-r from-primary-600 to-fuchsia-500 bg-clip-text text-transparent">
              {PERSONAL.shortName}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0">
            Начинающий Frontend-разработчик. Создаю современные, адаптивные и удобные
            веб-приложения на React и Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#projects" className="btn-primary">
              Смотреть проекты
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              <Mail size={18} />
              Связаться
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a
              href={PERSONAL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link hover:!border-green-500 hover:!text-green-600"
              aria-label={`WhatsApp ${PERSONAL.phone}`}
            >
              <WhatsappIcon size={20} />
            </a>
            <a href={`mailto:${PERSONAL.email}`} className="icon-link" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Визуальная карточка «кода» */}
        <div className="mx-auto w-full max-w-md">
          <div className="rotate-1 rounded-2xl border border-slate-200 bg-slate-900 p-5 shadow-2xl shadow-primary-600/20 transition hover:rotate-0">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed text-slate-300 sm:text-sm">
              <code>
                <span className="text-fuchsia-400">const</span> <span className="text-sky-300">developer</span> = {'{'}
                {'\n'}  name: <span className="text-emerald-300">'Айтолгон'</span>,
                {'\n'}  role: <span className="text-emerald-300">'Frontend Dev'</span>,
                {'\n'}  stack: [
                {'\n'}    <span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Vite'</span>,
                {'\n'}    <span className="text-emerald-300">'Tailwind'</span>,
                {'\n'}  ],
                {'\n'}  learning: <span className="text-amber-300">true</span>,
                {'\n'}{'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
