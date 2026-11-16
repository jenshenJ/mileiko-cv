export type Locale = 'ru' | 'en';

export interface Link {
  label: string;
  value: string;
  href: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Job {
  role: string;
  company: string;
  period: string;
  duration: string;
  summary: string[];
  stack: string;
}

export interface SkillGroup {
  label: string;
  items: string;
}

export interface CvContent {
  meta: {
    lang: 'ru' | 'en';
    title: string;
    description: string;
    ogLocale: string;
  };
  nav: {
    items: Array<{ label: string; href: string }>;
    switchLabel: string;
    switchHref: string;
    switchLang: 'ru' | 'en';
    skip: string;
    aria: string;
    brandAria: string;
  };
  hero: {
    eyebrow: string;
    meta: string[];
    name: [string, string];
    role: string;
    bio: string;
    status: string;
    contacts: Link[];
    facts: Fact[];
  };
  profile: {
    index: string;
    title: string;
    lead: string;
    body: string;
    facts: Fact[];
  };
  experience: {
    index: string;
    title: string;
    note: string;
    jobs: Job[];
  };
  project: {
    index: string;
    title: string;
    name: string;
    tagline: string;
    description: string;
    bullets: string[];
    specs: Array<Fact & { href?: string }>;
    stackLabel: string;
    stack: string;
    linkLabel: string;
    linkHref: string;
  };
  skills: {
    index: string;
    title: string;
    groups: SkillGroup[];
  };
  education: {
    index: string;
    title: string;
    school: string;
    program: string;
    faculty: string;
    status: string;
    languagesLabel: string;
    languages: Array<{ label: string; value: string }>;
  };
  contact: {
    index: string;
    title: string;
    heading: string;
    headingEm: string;
    email: string;
    note: string;
    links: Link[];
    location: string;
    copyright: string;
    top: string;
  };
}

export const shared = {
  email: 'vip.carich@gmail.com',
  github: 'https://github.com/jenshenJ',
  githubHandle: '@jenshenJ',
  telegram: 'https://t.me/jenshenJ',
  telegramHandle: '@jenshenJ',
  project: 'https://github.com/jenshenJ/tracker',
  legko: 'https://tracker-jet-six-77.vercel.app',
  legkoLabel: 'tracker-jet-six-77.vercel.app',
};

export const cv: Record<Locale, CvContent> = {
  ru: {
    meta: {
      lang: 'ru',
      title: 'Евгений Милейко — Fullstack-разработчик',
      description:
        'Fullstack-разработчик из Минска. 4+ года в Яндексе, TON и Softnetix: React/TypeScript, NestJS, Node.js. TonConnect SDK, внутренние сервисы, AI-автоматизация.',
      ogLocale: 'ru_RU',
    },
    nav: {
      items: [
        { label: 'Профиль', href: '#profile' },
        { label: 'Опыт', href: '#experience' },
        { label: 'Проект', href: '#project' },
        { label: 'Навыки', href: '#skills' },
        { label: 'Контакты', href: '#contact' },
      ],
      switchLabel: 'EN',
      switchHref: '/en/',
      switchLang: 'en',
      skip: 'Перейти к содержанию',
      aria: 'Основная навигация',
      brandAria: 'Евгений Милейко — наверх',
    },
    hero: {
      eyebrow: 'Портфолио / CV — 2026',
      meta: ['Минск, Беларусь', '53.90° N / 27.56° E'],
      name: ['Евгений', 'Милейко'],
      role: 'Fullstack-разработчик',
      bio: '4+ года в Яндексе, TON и Softnetix. Развиваю TonConnect SDK и внутренние инструменты: сервис тестирования кошельков на NestJS + React ускорил проверку на 80%. На клиенте — React/TypeScript, на сервере — NestJS и Node.js.',
      status: 'Открыт к предложениям',
      contacts: [
        {
          label: 'Email',
          value: shared.email,
          href: `mailto:${shared.email}`,
        },
        {
          label: 'GitHub',
          value: shared.githubHandle,
          href: shared.github,
        },
        {
          label: 'Telegram',
          value: shared.telegramHandle,
          href: shared.telegram,
        },
      ],
      facts: [
        { label: 'Опыт', value: '4+ года' },
        { label: 'Сейчас', value: 'The Open Platform · TON' },
        { label: 'Стек', value: 'TypeScript · React · NestJS · Node.js' },
      ],
    },
    profile: {
      index: '01',
      title: 'Профиль',
      lead: 'React/TypeScript на клиенте. *NestJS и Node.js* на сервере.',
      body: 'С 2022 года работаю в командах Яндекса, TON и Softnetix. Начинал с UI Yandex Tracker, сейчас развиваю TonConnect SDK. Делал внутренние сервисы: тестирование кошельков на NestJS + React (проверка быстрее на 80%) и автоматизацию деплоя поверх GitLab CI/CD. Отдельно занимаюсь AI-автоматизацией и производительностью: LLM-прокси, профилирование, работа с бандлом.',
      facts: [
        { label: 'Локация', value: 'Минск, Беларусь' },
        { label: 'Формат', value: 'Удалённо / гибрид / офис' },
        {
          label: 'Фокус',
          value: 'Fullstack, внутренние инструменты, AI-автоматизация',
        },
        {
          label: 'Языки',
          value: 'Русский, белорусский — родные. Английский — B2',
        },
      ],
    },
    experience: {
      index: '02',
      title: 'Опыт',
      note: '2022 — сейчас · Яндекс, TON, Softnetix',
      jobs: [
        {
          role: 'Frontend-разработчик',
          company: 'The Open Platform · TON ecosystem',
          period: 'май 2025 — сейчас',
          duration: '1 год 6 мес.',
          summary: [
            'Развиваю TonConnect SDK, одну из самых популярных JS-библиотек для подключения TON-кошельков: около 150 тыс. скачиваний в неделю.',
            'Собрал внутренний сервис тестирования кошельков: NestJS на бэкенде, React/TS на фронтенде. Ручная проверка стала быстрее на 80%.',
            'Отвечаю за клиентскую логику подключения, авторизации и обмена сообщениями между dApp и кошельками; пишу документацию и demo-приложения для интеграторов.',
            'Code review, CI и оптимизация производительности SDK.',
          ],
          stack: 'TypeScript · React · NestJS · Node.js · CI/CD',
        },
        {
          role: 'Frontend-разработчик',
          company: 'Яндекс · Yandex Tracker',
          period: 'июль 2024 — июнь 2025',
          duration: '1 год',
          summary: [
            'Делал сложные формы и визуальные редакторы в Yandex Tracker.',
            'Участвовал в развитии Gravity UI, UI-библиотеки Яндекса.',
            'Писал BFF для клиентских сценариев.',
            'Оптимизировал производительность и рефакторил существующий код.',
          ],
          stack: 'TypeScript · React · Redux/RTK · Gravity UI · REST API',
        },
        {
          role: 'Frontend-разработчик',
          company: 'Softnetix',
          period: 'окт. 2023 — июль 2024',
          duration: '10 мес.',
          summary: [
            'Отвечал за техническое качество команды: линты, strict TypeScript, CI/CD.',
            'Разработал сервис автоматизации деплоя поверх GitLab CI/CD для большого числа сервисов: NestJS + React/TS.',
            'Развивал тестирование: интеграционные и скриншотные тесты на Playwright.',
            'Интегрировал frontend с GraphQL API.',
          ],
          stack: 'TypeScript · React · NestJS · GraphQL · Playwright · GitLab CI/CD',
        },
        {
          role: 'Разработчик интерфейсов',
          company: 'Яндекс · Yandex Tracker',
          period: 'апр. 2022 — окт. 2023',
          duration: '1 год 7 мес.',
          summary: [
            'Разрабатывал UI Yandex Tracker: экраны и компоненты для задач, проектов и очередей.',
            'Интегрировал REST API и работал с состоянием приложения на Redux.',
            'Участвовал в code review и командных процессах разработки.',
          ],
          stack: 'JavaScript · TypeScript · React · Redux · HTML/CSS',
        },
      ],
    },
    project: {
      index: '03',
      title: 'Проект',
      name: 'legko',
      tagline: 'Дневник питания и тренировок',
      description:
        'PWA-дневник: AI-поиск продуктов, AI-повар под остаток КБЖУ, график веса и сканер штрих-кодов. Собрал один: интерфейс, serverless-прокси к LLM, деплой на Vercel.',
      bullets: [
        'AI-поиск продуктов, AI-повар под остаток КБЖУ, голосовой и фото-ввод еды.',
        'График веса с плановой линией до цели и сканер штрих-кодов.',
        'Serverless-прокси к LLM на Vercel Functions; данные в localStorage с JSON-бэкапом.',
        'Установка на экран и offline-режим через Service Worker.',
      ],
      specs: [
        { label: 'Роль', value: 'Дизайн, фронтенд, serverless' },
        { label: 'Год', value: '2025' },
        { label: 'Платформа', value: 'PWA' },
        {
          label: 'Продукт',
          value: shared.legkoLabel,
          href: shared.legko,
        },
        {
          label: 'Код',
          value: 'github.com/jenshenJ/tracker',
          href: shared.project,
        },
      ],
      stackLabel: 'Стек',
      stack: 'React 18 · TypeScript · Vite · Tailwind CSS 4 · Vercel Functions',
      linkLabel: 'Открыть legko',
      linkHref: shared.legko,
    },
    skills: {
      index: '04',
      title: 'Навыки',
      groups: [
        {
          label: 'Языки',
          items: 'JavaScript (ES6+), TypeScript, HTML5, CSS3',
        },
        {
          label: 'Frontend',
          items:
            'React, Redux/RTK, React Hooks, Gravity UI, UIKit, Tailwind CSS, адаптивная вёрстка, PWA, Service Worker',
        },
        {
          label: 'Backend',
          items:
            'NestJS, Node.js, REST API, WebSockets, BFF, Serverless (Vercel Functions)',
        },
        {
          label: 'Web3',
          items: 'TON Connect, TonConnect SDK, dApps, интеграция кошельков',
        },
        {
          label: 'AI / автоматизация',
          items: 'LLM API, AI-автоматизация процессов, serverless-прокси, внешние REST API',
        },
        {
          label: 'Тестирование',
          items: 'Jest, Vitest, Playwright (e2e), unit/integration/скриншотные тесты',
        },
        {
          label: 'Инструменты',
          items:
            'Git, GitHub, GitLab CI/CD, npm, pnpm, Vite, Webpack, ESLint, Figma, Docker, CI/CD, Vercel, Chrome DevTools',
        },
        {
          label: 'Практики',
          items: 'Code review, рефакторинг, техническое качество команды, Agile/Scrum',
        },
      ],
    },
    education: {
      index: '05',
      title: 'Образование',
      school: 'БГУИР, Минск',
      program: 'Информатика и технологии программирования',
      faculty: 'Факультет компьютерных систем и сетей',
      status: 'Неоконченное высшее · 2025',
      languagesLabel: 'Языки',
      languages: [
        { label: 'Русский', value: 'родной' },
        { label: 'Белорусский', value: 'родной' },
        { label: 'Английский', value: 'B2 — документация, переписка' },
      ],
    },
    contact: {
      index: '06',
      title: 'Контакты',
      heading: 'Давайте',
      headingEm: 'поговорим',
      email: shared.email,
      note: 'Открыт к предложениям о работе и сотрудничеству.',
      links: [
        {
          label: 'Email',
          value: shared.email,
          href: `mailto:${shared.email}`,
        },
        {
          label: 'Telegram',
          value: shared.telegramHandle,
          href: shared.telegram,
        },
        {
          label: 'GitHub',
          value: shared.githubHandle,
          href: shared.github,
        },
      ],
      location: 'Минск, Беларусь',
      copyright: '© 2026 Евгений Милейко',
      top: 'Наверх',
    },
  },

  en: {
    meta: {
      lang: 'en',
      title: 'Evgeny Mileiko — Fullstack Developer',
      description:
        'Fullstack developer based in Minsk. 4+ years at Yandex, TON and Softnetix: React/TypeScript, NestJS, Node.js. TonConnect SDK, internal tools, AI automation.',
      ogLocale: 'en_US',
    },
    nav: {
      items: [
        { label: 'Profile', href: '#profile' },
        { label: 'Experience', href: '#experience' },
        { label: 'Project', href: '#project' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' },
      ],
      switchLabel: 'RU',
      switchHref: '/',
      switchLang: 'ru',
      skip: 'Skip to content',
      aria: 'Main navigation',
      brandAria: 'Evgeny Mileiko — back to top',
    },
    hero: {
      eyebrow: 'Portfolio / CV — 2026',
      meta: ['Minsk, Belarus', '53.90° N / 27.56° E'],
      name: ['Evgeny', 'Mileiko'],
      role: 'Fullstack Developer',
      bio: '4+ years at Yandex, TON and Softnetix. I develop TonConnect SDK and internal tools: a wallet testing service built with NestJS and React cut manual checks by 80%. React/TypeScript on the client, NestJS and Node.js on the server.',
      status: 'Open to opportunities',
      contacts: [
        {
          label: 'Email',
          value: shared.email,
          href: `mailto:${shared.email}`,
        },
        {
          label: 'GitHub',
          value: shared.githubHandle,
          href: shared.github,
        },
        {
          label: 'Telegram',
          value: shared.telegramHandle,
          href: shared.telegram,
        },
      ],
      facts: [
        { label: 'Experience', value: '4+ years' },
        { label: 'Now', value: 'The Open Platform · TON' },
        { label: 'Stack', value: 'TypeScript · React · NestJS · Node.js' },
      ],
    },
    profile: {
      index: '01',
      title: 'Profile',
      lead: 'React/TypeScript on the client. *NestJS and Node.js* on the server.',
      body: 'I have worked in teams at Yandex, TON and Softnetix since 2022. I started with the Yandex Tracker UI and now develop TonConnect SDK. I built internal services: a wallet testing tool in NestJS + React (80% faster checks) and deployment automation on top of GitLab CI/CD. I also work on AI automation and performance: LLM proxies, profiling, bundle work.',
      facts: [
        { label: 'Location', value: 'Minsk, Belarus' },
        { label: 'Format', value: 'Remote / hybrid / office' },
        {
          label: 'Focus',
          value: 'Fullstack, internal tools, AI automation',
        },
        {
          label: 'Languages',
          value: 'Russian, Belarusian — native. English — B2',
        },
      ],
    },
    experience: {
      index: '02',
      title: 'Experience',
      note: '2022 — Present · Yandex, TON, Softnetix',
      jobs: [
        {
          role: 'Frontend Developer',
          company: 'The Open Platform · TON ecosystem',
          period: 'May 2025 — Present',
          duration: '1 yr 6 mos',
          summary: [
            'Developing TonConnect SDK, one of the most popular JS libraries for connecting TON wallets: about 150k weekly downloads.',
            'Built an internal wallet testing service with a NestJS backend and React/TS frontend. Manual checks got 80% faster.',
            'Own the client-side connection, authorization and messaging between dApps and wallets; write docs and demo apps for integrators.',
            'Code review, CI and SDK performance work.',
          ],
          stack: 'TypeScript · React · NestJS · Node.js · CI/CD',
        },
        {
          role: 'Frontend Developer',
          company: 'Yandex · Yandex Tracker',
          period: 'Jul 2024 — Jun 2025',
          duration: '1 yr',
          summary: [
            'Built complex forms and visual editors in Yandex Tracker.',
            'Contributed to Gravity UI, Yandex’s UI library.',
            'Wrote BFF for client scenarios.',
            'Optimized performance and refactored existing code.',
          ],
          stack: 'TypeScript · React · Redux/RTK · Gravity UI · REST API',
        },
        {
          role: 'Frontend Developer',
          company: 'Softnetix',
          period: 'Oct 2023 — Jul 2024',
          duration: '10 mos',
          summary: [
            'Owned the team’s technical quality: linting, strict TypeScript, CI/CD.',
            'Built deployment automation on top of GitLab CI/CD for a large number of services, using NestJS + React/TS.',
            'Advanced testing: integration and screenshot tests with Playwright.',
            'Integrated the frontend with a GraphQL API.',
          ],
          stack: 'TypeScript · React · NestJS · GraphQL · Playwright · GitLab CI/CD',
        },
        {
          role: 'Interface Developer',
          company: 'Yandex · Yandex Tracker',
          period: 'Apr 2022 — Oct 2023',
          duration: '1 yr 7 mos',
          summary: [
            'Built the Yandex Tracker UI: screens and components for tasks, projects and queues.',
            'Integrated REST APIs and managed state with Redux.',
            'Took part in code review and team workflow.',
          ],
          stack: 'JavaScript · TypeScript · React · Redux · HTML/CSS',
        },
      ],
    },
    project: {
      index: '03',
      title: 'Project',
      name: 'legko',
      tagline: 'Nutrition and training diary',
      description:
        'A PWA diary with AI food search, an AI chef that fits the remaining macros, a weight chart and a barcode scanner. Built solo: interface, serverless LLM proxy, deployment on Vercel.',
      bullets: [
        'AI food search, an AI chef for the remaining macros, voice and photo food input.',
        'Weight chart with a target line and a barcode scanner.',
        'Serverless LLM proxy on Vercel Functions; data stored in localStorage with JSON backup.',
        'Installable on the home screen, offline support via Service Worker.',
      ],
      specs: [
        { label: 'Role', value: 'Design, frontend, serverless' },
        { label: 'Year', value: '2025' },
        { label: 'Platform', value: 'PWA' },
        {
          label: 'Product',
          value: shared.legkoLabel,
          href: shared.legko,
        },
        {
          label: 'Code',
          value: 'github.com/jenshenJ/tracker',
          href: shared.project,
        },
      ],
      stackLabel: 'Stack',
      stack: 'React 18 · TypeScript · Vite · Tailwind CSS 4 · Vercel Functions',
      linkLabel: 'Open legko',
      linkHref: shared.legko,
    },
    skills: {
      index: '04',
      title: 'Skills',
      groups: [
        {
          label: 'Languages',
          items: 'JavaScript (ES6+), TypeScript, HTML5, CSS3',
        },
        {
          label: 'Frontend',
          items:
            'React, Redux/RTK, React Hooks, Gravity UI, UIKit, Tailwind CSS, responsive layout, PWA, Service Worker',
        },
        {
          label: 'Backend',
          items:
            'NestJS, Node.js, REST API, WebSockets, BFF, Serverless (Vercel Functions)',
        },
        {
          label: 'Web3',
          items: 'TON Connect, TonConnect SDK, dApps, wallet integration',
        },
        {
          label: 'AI / automation',
          items: 'LLM APIs, AI workflow automation, serverless proxy, external REST APIs',
        },
        {
          label: 'Testing',
          items: 'Jest, Vitest, Playwright (e2e), unit/integration/screenshot tests',
        },
        {
          label: 'Tools',
          items:
            'Git, GitHub, GitLab CI/CD, npm, pnpm, Vite, Webpack, ESLint, Figma, Docker, CI/CD, Vercel, Chrome DevTools',
        },
        {
          label: 'Practices',
          items: 'Code review, refactoring, team technical quality, Agile/Scrum',
        },
      ],
    },
    education: {
      index: '05',
      title: 'Education',
      school: 'BSUIR, Minsk',
      program: 'Computer Science and Programming Technologies',
      faculty: 'Faculty of Computer Systems and Networks',
      status: 'Incomplete higher education · 2025',
      languagesLabel: 'Languages',
      languages: [
        { label: 'Russian', value: 'native' },
        { label: 'Belarusian', value: 'native' },
        { label: 'English', value: 'B2 — documentation, correspondence' },
      ],
    },
    contact: {
      index: '06',
      title: 'Contact',
      heading: 'Let’s',
      headingEm: 'talk',
      email: shared.email,
      note: 'Open to job opportunities and collaboration.',
      links: [
        {
          label: 'Email',
          value: shared.email,
          href: `mailto:${shared.email}`,
        },
        {
          label: 'Telegram',
          value: shared.telegramHandle,
          href: shared.telegram,
        },
        {
          label: 'GitHub',
          value: shared.githubHandle,
          href: shared.github,
        },
      ],
      location: 'Minsk, Belarus',
      copyright: '© 2026 Evgeny Mileiko',
      top: 'Back to top',
    },
  },
};
