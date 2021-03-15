export interface Page {
  title: string;
  desc: string;
  url: string;
  subpages?: Page[];
}
