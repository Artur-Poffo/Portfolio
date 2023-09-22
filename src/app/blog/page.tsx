import { DefaultListItems } from "@/components/UI/DefaultListItems";
import { PageHeader } from "@/components/UI/PageHeader";
import { PageWrapper } from "@/components/UI/PageWrapper";
import { Metadata } from "next";
import { PostCard } from "./components/PostCard";
import { SearchBar } from "./components/SearchBar";

export const metadata: Metadata = {
  title: 'Artur Poffo | Blog',
  description: 'Blog pessoal criado com o intuito de compartilhar e aprofundar meus conhecimentos',
}

export default function Blog() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center gap-4" >
        <PageHeader title="Blog" />

        <div className="max-w-screen-xl flex flex-col items-center gap-10 px-4" >
          <header className="flex flex-col" >
            <SearchBar />
          </header>

          <DefaultListItems>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </DefaultListItems>
        </div>
      </div>
    </PageWrapper>
  )
}