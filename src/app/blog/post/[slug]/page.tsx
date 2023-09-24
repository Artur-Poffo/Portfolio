import { MarkdownContainer } from "@/components/UI/MarkdownContainer"
import { PageWrapper } from "@/components/UI/PageWrapper"
import { IPost } from "@/interfaces/IPost"
import { hygraph } from "@/lib/graphql-request"
import dayjs from "dayjs"
import Image from "next/image"

interface queryResponse {
  post: IPost
}

async function getPost(params: { slug: string }) {
  const { post } = await hygraph.request<queryResponse>(
    `query GetPost($slug: String!) {
      post(where: { slug: $slug }) {
        postImage {
          url
        },
        title,
        createdAt,
        content
      }
    }`,
    {
      slug: params.slug
    }
  )

  return post
}

interface PostProps {
  params: {
    slug: string
  }
}

export default async function Post({ params: { slug } }: PostProps) {
  const post = await getPost({ slug })

  return (
    <PageWrapper>
      <div className="flex flex-col items-center pt-20 pb-10" >
        <article className="max-w-screen-md flex flex-col items-center gap-10 px-4" >
          <header className="flex flex-col gap-8" >
            <Image className="max-h-[450px] object-cover rounded-xl border border-brand-gray-300" src={post.postImage.url} width={800} height={800} alt="Imagem do projeto" />

            <div>
              <h1 className="text-4xl md:text-4xl font-mono font-bold text-brand-blue-100 mb-2" >{post.title}</h1>
              <span className="text-sm text-brand-gray-400" >{dayjs(post.createdAt).format("DD/MM/YYYY")}</span>
            </div>

            <div className="w-full h-1 bg-brand-blue-200" />
          </header>

          <main className="self-start">
            <MarkdownContainer>
              {post.content}
            </MarkdownContainer>
          </main>
        </article>
      </div>
    </PageWrapper>
  )
}