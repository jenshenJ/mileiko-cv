# Евгений Милейко — CV

Одностраничный CV-лендинг на Astro: русская версия на `/`, английская на `/en/`.
Статический HTML, рукописный CSS, самохостинговые шрифты, почти без JavaScript.

## Стек

- Astro 7 + TypeScript
- Обычный CSS с дизайн-токенами в `src/styles/global.css`
- Golos Text, Literata, IBM Plex Mono (Fontsource, локально)
- Деплой на Vercel

## Команды

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # статика в dist/
npm run preview   # посмотреть production-сборку
npm run check     # типы и диагностика Astro
```

## Где что лежит

```
src/
  data/cv.ts          весь контент: RU и EN, опыт, навыки, контакты
  components/         секции страницы
  layouts/Base.astro  head, meta, шрифты, скрипты
  styles/global.css   дизайн-система и адаптив
  pages/index.astro   RU /
  pages/en/index.astro EN /en/
public/
  og-ru.png, og-en.png  превью для соцсетей
  favicon.svg
```

Чтобы поправить текст, даты или стек — достаточно `src/data/cv.ts`.
Цвета, типографика и отступы — в `:root` и секциях `src/styles/global.css`.

## Деплой на Vercel

1. Создать репозиторий на GitHub и запушить `main`.
2. На [vercel.com](https://vercel.com) — **Add New → Project → Import** репозитория.
3. Framework Preset определится как **Astro**, менять команды не нужно.
4. Deploy.

`vercel.json` фиксирует framework, build command и output directory.
Домен для canonical, hreflang и OG-картинок берётся из
`VERCEL_PROJECT_PRODUCTION_URL` автоматически. Если подключён кастомный домен
и нужно переопределить — добавьте переменную окружения `SITE_URL`
(например, `https://mileiko.dev`).

## Детали

- Печать: `Ctrl/Cmd + P` — есть отдельные print-стили, страница сохраняется в PDF.
- Контакты на сайте: email, GitHub, Telegram. Телефон из исходного PDF не публикуется.
- Анимации отключаются при `prefers-reduced-motion`.
- Тёмной темы нет намеренно: это светлый editorial-макет.
