export const SITE = {
  title: "Open Source Raid Guild -- Tutorial Quest",
  description:
    "The OSS Raid Group is what happens when you combine MMORPGs (Gamification), Mob Programming, Crowdsourcing, and Open Source Software - a group dedicated to defeating the Raid Bosses of OSS",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://osrg.t3.gg/assets/logo-full.svg",
    alt: "Koala with cross swords, OSRG Open Source Raid Guild, Shield behind whole image",
  },
  twitter: "O_S_R_G",
};

export const KNOWN_LANGUAGES = {
  English: "en",
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/OpenSourceRaidGuild/tutorial-quest/blob/main/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
export const COMMUNITY_INVITE_URL = `https://discord.gg/urQuPURusm`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
  en: [
    { text: "", header: true },
    { text: "Introduction", link: "docs/en/tutorial-quest" },
    { text: "Raid Workflow", link: "docs/en/raid-git-workflow" },

    { text: "Additional Information", header: true },
    { text: "credits", link: "docs/en/credits" },
  ],
};
