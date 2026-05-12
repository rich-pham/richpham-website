export type Post = {
  slug: string;
  title: string;
  image: string;
  category: string;
  date: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: 'how-to-find-your-competitive-edge-on-and-off-the-race-track',
    title: 'How to Find Your Competitive Edge On and Off The Race Track',
    image: '/images/about/world-class-racing-driver.jpg',
    category: 'Racing Through Life',
    date: 'Jan 21, 2025',
    body: [],
  },
  {
    slug: 'from-zero-to-factory-how-i-brought-pocari-sweat-to-vietnam-s-fast-lane',
    title: "From Zero to Factory: How I Brought Pocari Sweat to Vietnam's Fast Lane",
    image: '/images/about/blog-pocari.png',
    category: 'Racing Through Life',
    date: 'Apr 17, 2025',
    body: [],
  },
  {
    slug: 'building-a-competitive-edge-is-easier-than-you-think',
    title: 'Building a Competitive Edge Is Easier Than You Think',
    image: '/images/blog.jpg',
    category: 'Racing Through Life',
    date: 'Jan 23, 2025',
    body: [],
  },
  {
    slug: 'racing-and-business-how-can-racing-benefit-a-leadership-coach',
    title: 'Racing and Business: How Can Racing Benefit A Leadership Coach?',
    image: '/images/blog.jpg',
    category: 'Racing Through Life',
    date: 'Jan 22, 2025',
    body: [],
  },
  {
    slug: 'why-every-leader-should-learn-from-mistakes-for-growth-and-innovation',
    title: 'Why Every Leader Should Learn from Mistakes for Growth and Innovation',
    image: '/images/blog.jpg',
    category: 'Reinvent to Succeed',
    date: 'Jan 23, 2025',
    body: [],
  },
  {
    slug: 'the-role-of-a-leadership-coach-in-turning-failure-into-a-comeback-story',
    title: 'The Role of a Leadership Coach in Turning Failure Into a Comeback Story',
    image: '/images/about/rich.jpg',
    category: 'Reinvent to Succeed',
    date: 'Jan 23, 2025',
    body: [],
  },
  {
    slug: 'how-a-leadership-coach-can-help-you-spot-untapped-opportunities',
    title: 'How a Leadership Coach Can Help You Spot Untapped Opportunities',
    image: '/images/about/blog-leadership-coach.jpg',
    category: 'Reinvent to Succeed',
    date: 'Jan 24, 2025',
    body: [],
  },
  {
    slug: 'how-perseverance-builds-resilient-businesses',
    title: 'How Perseverance Builds Resilient Businesses',
    image: '/images/about/blog-perseverance.jpg',
    category: 'Reinvent to Succeed',
    date: 'Jan 24, 2025',
    body: [],
  },
];

export function getPostBySlug(slug: string): Post | null {
  return posts.find((p) => p.slug === slug) ?? null;
}

export function getRecentPosts(excludeSlug: string, count = 3): Post[] {
  return posts.filter((p) => p.slug !== excludeSlug).slice(0, count);
}
