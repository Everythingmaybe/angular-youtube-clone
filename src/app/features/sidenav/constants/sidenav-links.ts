import { SidenavLink } from '@features/sidenav/models/sidenav-link.model';

export const SIDENAV_GENERAL_LINKS: SidenavLink[] = [
  { name: 'Home', icon: 'home', href: '/' },
  { name: 'Shorts', icon: 'explore', href: '/' },
  { name: 'Subscriptions', icon: 'subscriptions', href: '/' },
];

export const SIDENAV_GENERAL_LINKS_SECOND: SidenavLink[] = [
  { name: 'Library', icon: 'video_library', href: '/' },
  { name: 'History', icon: 'history', href: '/' },
];

export const SIDENAV_EXPLORE_LINKS: SidenavLink[] = [
  { name: 'Trending', icon: 'local_fire_department', href: '/' },
  { name: 'Music', icon: 'music_note', href: '/' },
  { name: 'Movies', icon: 'theaters', href: '/' },
  { name: 'Gaming', icon: 'stadia_controller', href: '/' },
  { name: 'Sports', icon: 'sports', href: '/' },
  { name: 'Learning', icon: 'school', href: '/' },
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
