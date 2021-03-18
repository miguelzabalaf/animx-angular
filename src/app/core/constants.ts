import { Page } from '../interfaces/page';

export const MENU: Page[] = [
  {
    title: "Anime",
    desc: "Stay on top of this season's anime, next season and the best ever",
    url: "/anime",
    subpages: [
      {
        title: "Airing",
        desc: "Find out about the animes that are being broadcast",
        url: "/anime/airing"
      },
      {
        title: "Upcoming",
        desc: "Find out about future successes and animes that will leave you excited",
        url: "/anime/upcoming"
      },
      {
        title: "Top 50",
        desc: "Here you will see the animes you have to see!",
        url: "/anime/top"
      },
    ]
  },
  {
    title: "Manga",
    desc: "Find out which manga you can read in your free time and choose among the best",
    url: "/manga",
  },
  {
    title: "Characters",
    desc: "Here you will see the most coveted 2D characters in the world, surely you have your favorite",
    url: "/characters",
  },
  {
    title: "Seasons",
    desc: "Travel back in time and watch find the anime of past years to relive moments",
    url: "/seasons",
  },
]
