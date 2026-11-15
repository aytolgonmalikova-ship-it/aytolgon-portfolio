import { ChefHat, Code2, GraduationCap, Languages, MonitorSmartphone, Rocket, Trophy } from 'lucide-react';
import { EDUCATION, LANGUAGES, PERSONAL } from '../data/constants';
import SectionHeader from './SectionHeader';

const HIGHLIGHTS = [
  { icon: Code2, title: 'Чистый код', text: 'Понятная структура, переиспользуемые компоненты и читаемый код.' },
  { icon: MonitorSmartphone, title: 'Адаптивность', text: 'Интерфейсы, которые отлично выглядят на телефоне, планшете и десктопе.' },
  { icon: Rocket, title: 'Современный стек', text: 'React, Vite и Tailwind CSS для быстрых и удобных приложений.' },
];

const LEVEL_STEPS = [1, 2, 3, 4, 5];

function FactCard({ icon: Icon, iconClass, eyebrow, title, children }) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:bg-white hover:shadow-lg">
      <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconClass}`}>
        <Icon size={24} />
      </span>
      <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-slate-400">{eyebrow}</p>
      <h3 className="mt-1 text-lg font-bold text-slate-900">{title}</h3>
      {children}
    </article>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="container-page">
        {/* Био + сильные стороны */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader eyebrow="О себе" title="Кто я" />
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Я <strong className="font-semibold text-slate-900">{PERSONAL.fullName}</strong> — начинающий
              фронтенд-разработчик, который превращает идеи в живые интерфейсы. Люблю, когда код чистый,
              вёрстка адаптивная, а сайтом приятно пользоваться с любого экрана.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Учусь в {EDUCATION.universityShort} на факультете европейских цивилизаций, а между парами
              успеваю три вещи:{' '}
              <span className="font-medium text-slate-900">писать код, забрасывать мячи в кольцо</span> и{' '}
              <span className="font-medium text-slate-900">изобретать рецепты</span>. Баскетбол научил меня
              играть в команде, кухня — не бояться экспериментов, а разработка собрала всё это вместе.
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

        {/* Учёба, спорт, кухня */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <FactCard
            icon={GraduationCap}
            iconClass="bg-primary-100 text-primary-600"
            eyebrow="Образование"
            title={EDUCATION.universityShort}
          >
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {EDUCATION.university}, {EDUCATION.faculty.toLowerCase()}. Гуманитарная база помогает мне
              думать о людях по ту сторону экрана.
            </p>
          </FactCard>

          <FactCard
            icon={Trophy}
            iconClass="bg-orange-100 text-orange-600"
            eyebrow="Спорт"
            title="Баскетбол 🏀"
          >
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Мяч со мной давно — на площадке я научилась работать в команде и держать темп до финального
              свистка.
            </p>
            <ol className="mt-4 space-y-3 border-l-2 border-orange-200 pl-4 text-sm">
              <li>
                <p className="font-semibold text-slate-800">Сборная школы</p>
                <p className="text-slate-500">Раньше</p>
              </li>
              <li className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.4rem] top-1.5 h-2.5 w-2.5 rounded-full bg-orange-500 ring-4 ring-orange-100"
                />
                <p className="font-semibold text-slate-800">Сборная факультета</p>
                <p className="text-slate-500">Сейчас</p>
              </li>
            </ol>
          </FactCard>

          <FactCard
            icon={ChefHat}
            iconClass="bg-fuchsia-100 text-fuchsia-600"
            eyebrow="Кулинария"
            title="Креатив не только в коде"
          >
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Рецепт — тот же алгоритм: ингредиенты на входе, шаги по порядку и немного импровизации. На
              кухне я «деплою» блюда так же увлечённо, как сайты.
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-xs leading-relaxed text-slate-300">
              <code>
                <span className="text-fuchsia-400">const</span> ужин ={' '}
                <span className="text-sky-400">приготовить</span>({'{'}
                {'\n'}
                {'  '}основа: <span className="text-emerald-400">'хорошая идея'</span>,{'\n'}
                {'  '}специи: <span className="text-emerald-400">'щепотка смелости'</span>,{'\n'}
                {'  '}баги: <span className="text-amber-400">0</span>,{'\n'}
                {'}'});{'\n'}
                <span className="text-slate-500">{'// => вкусно ✨'}</span>
              </code>
            </pre>
          </FactCard>
        </div>

        {/* Языки */}
        <div className="mt-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-primary-50 via-white to-fuchsia-50 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm">
              <Languages size={24} />
            </span>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Языки</h3>
              <p className="text-sm text-slate-500">Говорю на трёх — и ещё на паре языков программирования.</p>
            </div>
          </div>

          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {LANGUAGES.map(({ name, nativeName, code, levelLabel, level }) => (
              <li key={code} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-900">{name}</p>
                    <p className="text-sm text-slate-400">{nativeName}</p>
                  </div>
                  <span className="rounded-lg bg-primary-50 px-2 py-1 text-xs font-bold text-primary-600">
                    {code}
                  </span>
                </div>
                <div className="mt-4 flex gap-1.5" aria-hidden="true">
                  {LEVEL_STEPS.map((step) => (
                    <span
                      key={step}
                      className={`h-1.5 flex-1 rounded-full ${
                        step <= level ? 'bg-gradient-to-r from-primary-500 to-fuchsia-500' : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm font-medium text-primary-600">{levelLabel}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
