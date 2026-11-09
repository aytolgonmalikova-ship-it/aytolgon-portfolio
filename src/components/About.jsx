import { Code2, MonitorSmartphone, Rocket } from 'lucide-react';
import { PERSONAL } from '../data/constants';
import SectionHeader from './SectionHeader';

const HIGHLIGHTS = [
  { icon: Code2, title: 'Чистый код', text: 'Понятная структура, переиспользуемые компоненты и читаемый код.' },
  { icon: MonitorSmartphone, title: 'Адаптивность', text: 'Интерфейсы, которые отлично выглядят на телефоне, планшете и десктопе.' },
  { icon: Rocket, title: 'Современный стек', text: 'React, Vite и Tailwind CSS для быстрых и удобных приложений.' },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader eyebrow="О себе" title="Кто я" />
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            <strong className="font-semibold text-slate-900">{PERSONAL.fullName}</strong> — начинающий
            фронтенд-разработчик. Активно развиваюсь в веб-разработке, фокусируюсь на написании чистого
            кода, использовании современных инструментов (React, Vite, Tailwind CSS) и верстке
            адаптивных интерфейсов.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-primary-200 hover:shadow-md lg:flex-row lg:items-start"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                <Icon size={22} />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
