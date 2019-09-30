export interface Post {
  contents: string;
  data: {
    date: string;
    description: string;
    image?: string;
    slug: string;
    tag: string;
    title: string;
    updated?: string;
  };
}
