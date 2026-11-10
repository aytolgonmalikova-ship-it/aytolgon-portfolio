// Личные данные и контакты
export const PERSONAL = {
  fullName: 'Маликова Айтолгон Жоробековна',
  shortName: 'Маликова Айтолгон',
  role: 'Frontend Developer',
  roleRu: 'Начинающий фронтенд-разработчик',
  email: 'aytolgonmalikova@gmail.com',
  phone: '+996504889991',
  phoneDisplay: '+996 504 889 991',
  github: 'https://github.com/aytolgonmalikova-ship-it',
  githubUser: 'aytolgonmalikova-ship-it',
  whatsapp: 'https://wa.me/996504889991',
  cv: '/Malikova_Aytolgon_CV.pdf',
};

export const NAV_LINKS = [
  { id: 'about', label: 'О себе' },
  { id: 'projects', label: 'Проекты' },
  { id: 'skills', label: 'Навыки' },
  { id: 'contact', label: 'Контакты' },
];

// Проекты.
// liveUrl: вставьте ссылку на деплой Vercel. Пока поле пустое,
// кнопка «Live Demo» показывается как неактивная («Скоро»).
// image: можно указать путь к скриншоту в /public (например '/projects/aroma-donna.png').
// Если image не задан — используется сгенерированное превью.
export const PROJECTS = [
  {
    id: 'aroma-donna',
    title: 'Aroma Donna',
    description:
      'E-commerce веб-приложение для бренда парфюмерии с каталогом, корзиной и оформлением заказа.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Firebase'],
    githubUrl: 'https://github.com/aytolgonmalikova-ship-it/aroma-donna',
    liveUrl: 'https://aroma-donna.vercel.app',
    image: '/aroma-donna.PNG',
    preview: {
      gradient: 'from-rose-400 via-pink-500 to-fuchsia-600',
      emoji: '🌸',
      tagline: 'Parfum Store',
    },
  },
  {
    id: 'perfect-playtime',
    title: 'Perfect Playtime',
    description:
      'Интерактивное веб-приложение с адаптивным интерфейсом и компонентной архитектурой на React. Удобная навигация и современный UI на Tailwind CSS.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/aytolgonmalikova-ship-it/perfect-playtime',
    liveUrl: 'https://perfectplaytime-virid.vercel.app',
    image: '/05.png',
    preview: {
      gradient: 'from-sky-400 via-indigo-500 to-violet-600',
      emoji: '🎮',
      tagline: 'Interactive App',
    },
  },
  {
    id: 'easy-peasy-english',
    title: 'Easy Peasy English',
    description:
      'Интерактивное веб-приложение для детских курсов английского языка с мультяшным дизайном, переключением тем, поддержкой 3 языков и валидацией форм.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'i18next'],
    githubUrl: 'https://github.com/aytolgonmalikova-ship-it/easy-peasy-english',
    liveUrl: 'https://easy-peasy-english-ten.vercel.app', // проверь свою ссылку на Vercel
    image: '/english.png', // или имя твоего скриншота из папки public
    preview: {
      gradient: 'from-amber-400 via-orange-400 to-yellow-400',
      emoji: '🧸',
      tagline: 'Kids English App',
    },
  },
  {
    id: 'u-mamy-na-kuhne',
    title: 'У мамы на кухне',
    description:
      'Уютный мультиязычный веб-сайт для заказа сладкой и несладкой домашней выпечки с переключением тем, формой заказа и интеграцией WhatsApp.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'i18next', 'React Router'],
    githubUrl: 'https://github.com/aytolgonmalikova-ship-it/u-mamy-na-kuhne',
    liveUrl: 'https://u-mamy-na-kuhne.vercel.app', // укажи свою ссылку из Vercel
    image: '/vypechka.png', // путь к твоему скриншоту
    preview: {
      gradient: 'from-amber-500 via-orange-500 to-yellow-600',
      emoji: '🥐',
      tagline: 'Bakery & Pastry',
    },
  },
    
];

export const SKILLS = [
  { name: 'React', color: 'text-sky-500 bg-sky-50', abbr: '⚛' },
  { name: 'Vite', color: 'text-violet-600 bg-violet-50', abbr: '⚡' },
  { name: 'HTML5', color: 'text-orange-600 bg-orange-50', abbr: '5' },
  { name: 'CSS3', color: 'text-blue-600 bg-blue-50', abbr: '3' },
  { name: 'Tailwind CSS', color: 'text-cyan-600 bg-cyan-50', abbr: '~' },
  { name: 'JavaScript', color: 'text-yellow-600 bg-yellow-50', abbr: 'JS' },
  { name: 'Git', color: 'text-red-600 bg-red-50', abbr: 'G' },
  { name: 'GitHub', color: 'text-slate-800 bg-slate-100', abbr: 'GH' },
];
