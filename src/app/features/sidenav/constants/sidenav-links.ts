import { SidenavLink } from '@features/sidenav/models/sidenav-link.model';

export const SIDENAV_GENERAL_LINKS: SidenavLink[] = [
  { name: 'Home', icon: 'home', href: '/' },
  { name: 'Shorts', icon: 'shorts', href: '/' },
  { name: 'Subscriptions', icon: 'subscriptions', href: '/' },
];

export const SIDENAV_GENERAL_LINKS_SECOND: SidenavLink[] = [
  { name: 'Library', icon: 'library', href: '/' },
  { name: 'History', icon: 'history', href: '/' },
];

export const SIDENAV_EXPLORE_LINKS: SidenavLink[] = [
  { name: 'Trending', icon: 'fire', href: '/' },
  { name: 'Music', icon: 'music_note', href: '/' },
  { name: 'Movies', icon: 'movies', href: '/' },
  { name: 'Live', icon: 'wireless', href: '/' },
  { name: 'Gaming', icon: 'game', href: '/' },
  { name: 'Sports', icon: 'champ_cup', href: '/' },
];

export const SIDENAV_MORE_LINKS: SidenavLink[] = [
  {
    name: 'YouTube Music',
    icon: 'yt_music',
    href: 'https://music.youtube.com',
  },
  {
    name: 'YouTube Kids',
    icon: 'yt_kids',
    href: 'https://www.youtubekids.com',
  },
  { name: 'YouTube TV', icon: 'yt_tv', href: 'https://tv.youtube.com' },
];

export const SIDENAV_FOOTER_LINKS: SidenavLink[] = [
  { name: 'About', href: 'https://www.youtube.com/about' },
  { name: 'Press', href: 'https://www.youtube.com/about/press' },
  { name: 'Copyright', href: 'https://www.youtube.com/about/copyright' },
  { name: 'Contact us', href: 'https://www.youtube.com/t/contact_us' },
  { name: 'Creators', href: 'https://www.youtube.com/creators' },
  { name: 'Advertise', href: 'https://www.youtube.com/ads' },
  { name: 'Developers', href: 'https://developers.google.com/youtube' },
];

export const SIDENAV_FOOTER_LINKS_SECOND: SidenavLink[] = [
  { name: 'Terms', href: 'https://www.youtube.com/t/terms' },
  { name: 'Privacy', href: 'https://www.youtube.com/t/privacy' },
  { name: 'Policy & Safety', href: 'https://www.youtube.com/about/policies' },
  {
    name: 'How YouTube works',
    href: 'https://www.youtube.com/howyoutubeworks',
  },
  {
    name: 'Test new features',
    href: 'https://www.youtube.com/new',
  },
];
