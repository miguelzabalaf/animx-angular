export interface Page {
  title: string;
  desc: string;
  url: string;
  url_img?: string;
  subpages?: Page[];
}
