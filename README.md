# Портфолио — Маликова Айтолгон

Сайт-портфолио Frontend-разработчика на **React + Vite + Tailwind CSS + Lucide React**.

## Запуск

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production-сборка в папку dist/
npm run preview  # просмотр сборки
```

## Структура

```
src/
  data/constants.js      — личные данные, контакты, массив PROJECTS, навыки
  components/
    Navbar.jsx           — шапка, навигация, мобильное меню, «Скачать CV»
    Hero.jsx             — главный экран
    About.jsx            — о себе
    Projects.jsx         — сетка проектов
    ProjectCard.jsx      — карточка проекта (превью, теги, GitHub / Live Demo)
    Skills.jsx           — навыки
    Contact.jsx          — форма обратной связи + прямые контакты
    Footer.jsx           — подвал
    SectionHeader.jsx    — заголовок секции (переиспользуемый)
    BrandIcons.jsx       — иконки GitHub и WhatsApp
public/
  Malikova_Aytolgon_CV.pdf — резюме для кнопки «Скачать CV»
```

## Что нужно дополнить

1. **Ссылки Live Demo** — в `src/data/constants.js` заполните `liveUrl` у проектов
   (например `https://aroma-donna.vercel.app`). Пока поле пустое, кнопка показывает «Скоро».
2. **Скриншоты проектов** (необязательно) — положите картинку в `public/projects/` и укажите
   `image: '/projects/aroma-donna.png'`. Без неё показывается сгенерированное превью.
3. **CV** — замените `public/Malikova_Aytolgon_CV.pdf` на своё резюме (имя файла сохраните).

## Форма обратной связи

Форма работает без сервера: после проверки полей открывает почтовый клиент
с уже заполненным письмом на aytolgonmalikova@gmail.com.

## Деплой на Vercel

Импортируйте репозиторий на vercel.com — Vite определится автоматически
(Build: `npm run build`, Output: `dist`).
