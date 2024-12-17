import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://thejstutorials.com/", // replace this with your deployed domain
  author: "Dev Gaurav Jatt",
  profile: "https://github.com/devgauravjatt",
  desc: "A software development blog covering topics & tutorials related to the web, javascript, react, solid, svelte, bun, deno, node, developer tools and framework like nextjs, astrojs, sveltekit and much more.",
  title: "TheJsTutorials",
  ogImage: "thejstutorials.png",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  editPostIs: false,
  editPost: {
    url: "https://x.com/DevGauravJatt/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/devgauravjatt",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://x.com/DevGauravJatt",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/devgauravjatt",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/devgauravjatt/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "X",
    href: "https://x.com/DevGauravJatt",
    linkTitle: `${SITE.title} on X`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://x.com/DevGauravJatt",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://x.com/DevGauravJatt",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://x.com/DevGauravJatt",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://x.com/DevGauravJatt",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://x.com/DevGauravJatt",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://x.com/DevGauravJatt",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://x.com/DevGauravJatt",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://x.com/DevGauravJatt",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://x.com/DevGauravJatt",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://x.com/DevGauravJatt",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://x.com/DevGauravJatt",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://x.com/DevGauravJatt",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://x.com/DevGauravJatt",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://x.com/DevGauravJatt",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/devgauravjatt.bsky.social",
    linkTitle: `${SITE.title} on Bluesky`,
    active: true,
  },
];
