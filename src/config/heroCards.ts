import { userIcon, settingsIcon, githubIcon } from '@/assets/icons.ts';

export interface HeroCard {
  id: string;
  title: string;
  svgIcon: string;
  style: string;
  content?: string;
}

export const heroCards: HeroCard[] = [
  {
    id: 'profile',
    title: "",
    svgIcon: userIcon,
    style: "grid-column: span 3 / span 3; grid-row: span 4 / span 4;",
    content: ""
  },
  {
    id: 'settings',
    title: "",
    svgIcon: settingsIcon,
    style: "grid-column: span 2 / span 2; grid-row: span 2 / span 2; grid-column-start: 4;",
    content: ""
  },
  {
    id: 'github',
    title: "",
    svgIcon: githubIcon,
    style: "grid-column-start: 4; grid-row-start: 3;",
    content: ""
  },
  {
    id: 'linkedin',
    title: "",
    svgIcon: githubIcon,
    style: "grid-column-start: 5; grid-row-start: 3;",
    content: ""
  },
  {
    id: 'gmail',
    title: "",
    svgIcon: githubIcon,
    style: "grid-column-start: 4; grid-row-start: 4;",
    content: ""
  },
  {
    id: 'curriculum',
    title: "",
    svgIcon: githubIcon,
    style: "grid-column-start: 5; grid-row-start: 4;",
    content: ""
  },
  {
    id: 'skills',
    title: "",
    svgIcon: githubIcon,
    style: "grid-column: span 2 / span 2; grid-row-start: 5;",
    content: ""
  },
  {
    id: 'decoration',
    title: "",
    svgIcon: githubIcon,
    style: "grid-column: span 2 / span 2; grid-column-start: 3; grid-row-start: 5;",
    content: ""
  },
  {
    id: 'university',
    title: "",
    svgIcon: githubIcon,
    style: "grid-column-start: 5; grid-row-start: 5;",
    content: ""
  },
  {
    id: 'cambridge-english',
    title: "",
    svgIcon: githubIcon,
    style: "grid-column: span 3 / span 3; grid-row-start: 6;",
    content: ""
  },
  {
    id: 'time-hour',
    title: "",
    svgIcon: githubIcon,
    style: "grid-column: span 2 / span 2; grid-column-start: 4; grid-row-start: 6;",
    content: ""
  }
];