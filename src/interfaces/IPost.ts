export interface IPost {
  id: string;
  postImage: {
    url: string;
  };
  title: string;
  slug: string;
  description: string;
  content: string;
  createdAt: Date;
}