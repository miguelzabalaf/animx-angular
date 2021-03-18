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
        url: "/anime/airing",
        url_img: "https://static.tvtropes.org/pmwiki/pub/images/rika_fullbody.png"
      },
      {
        title: "Upcoming",
        desc: "Find out about future successes and animes that will leave you excited",
        url: "/anime/upcoming",
        url_img: "https://i.pinimg.com/originals/91/23/1e/91231e8a9b9b906dc05cfa1494255605.png"
      },
      {
        title: "Top 50",
        desc: "Here you will see the animes you have to see!",
        url: "/anime/top",
        url_img: "https://i.pinimg.com/originals/9f/8d/f9/9f8df930f9e580bbaff8857f3603e244.png"
      },
    ]
  },
  {
    title: "Manga",
    desc: "Find out which manga you can read in your free time and choose among the best",
    url: "/manga",
    subpages: [
      {
        title: "Example 1",
        desc: "Find out about the animes that are being broadcast, you're welcome",
        url: "/manga/airing",
        url_img: "https://1.bp.blogspot.com/-UFtEz__P038/X_db7_Z3liI/AAAAAAAAo0M/3r600ysVYoQNltmJm14uiDSasYECsO_-wCLcBGAsYHQ/w0/Nakano.Nino.full.3180627.png"
      },
      {
        title: "Example 2",
        desc: "Find out about future successes and animes that will leave you excited",
        url: "/manga/upcoming",
        url_img: "https://i.pinimg.com/originals/69/ac/da/69acda14043f4090192290ef04804918.png"
      },

    ]
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
