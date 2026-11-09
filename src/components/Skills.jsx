import { SKILLS } from '../data/constants';
import SectionHeader from './SectionHeader';

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Навыки"
          title="Технологии и инструменты"
          subtitle="Стек, с которым я работаю каждый день."
          center
        />
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {SKILLS.map((skill) => (
            <li
              key={skill.name}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:bg-white hover:shadow-lg"
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-extrabold transition group-hover:scale-110 ${skill.color}`}
              >
                {skill.abbr}
              </span>
              <span className="font-semibold text-slate-800">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
