import { DefaultListItems } from "@/components/UI/DefaultListItems";
import { PageHeader } from "@/components/UI/PageHeader";
import { PageWrapper } from "@/components/UI/PageWrapper";
import { IPost } from "@/interfaces/IPost";
import { hygraph } from "@/lib/graphql-request";
import { Metadata } from "next";
import { PostCard } from "./components/PostCard";
import { SearchBar } from "./components/SearchBar";

export const metadata: Metadata = {
  title: 'Artur Poffo | Blog',
  description: 'Blog pessoal criado com o intuito de compartilhar e aprofundar meus conhecimentos',
}

export const dynamic = "force-dynamic"

interface queryResponse {
  posts: IPost[]
}

async function getPosts(params: { query: string }) {
  const { posts } = await hygraph.request<queryResponse>(
    `query getPosts($query: String!) {
      posts(last: 100, where: {title_contains: $query}, orderBy: createdAt_DESC) {
        id,
        title,
        slug,
        description,
        createdAt
        postImage {
          url
        }
      }
    }`,
    {
      query: params.query || ""
    }
  )

  return posts
}

interface BlogProps {
  searchParams: {
    query: string
  }
}

export default async function Blog({ searchParams: { query } }: BlogProps) {
  const posts = await getPosts({ query })

  return (
    <PageWrapper>
      <div className="flex flex-col items-center gap-4" >
        <PageHeader title="Blog" />

        <div className="max-w-screen-xl flex flex-col items-center gap-10 px-4" >
          <header className="flex flex-col" >
            <SearchBar />
          </header>

          <DefaultListItems>
            {posts.map(post => {
              return (
                <PostCard
                  key={post.id}
                  createdAt={post.createdAt}
                  description={post.description}
                  imageUrl={post.postImage.url}
                  title={post.title}
                  slug={post.slug}
                />
              )
            })}
          </DefaultListItems>
        </div>
      </div>
    </PageWrapper>
  )
}
