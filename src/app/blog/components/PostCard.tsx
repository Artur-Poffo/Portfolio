import { DefaultCard } from "@/components/UI/DefaultCard";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  slug: string;
  imageUrl: string;
  title: string;
  createdAt: Date;
  description: string;
}

import 'dayjs/locale/pt-br';
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export function PostCard({ slug, createdAt, description, imageUrl, title }: PostCardProps) {
  return (
    <Link href={`/blog/post/${slug}`} >
      <DefaultCard className="max-w-[500px] min-h-[200px] md:min-h-[530px] flex flex-col gap-4 p-0 rounded-md" >
        <header className="w-full" >
          <Image className="w-full max-h-[300px] object-cover" src={imageUrl} alt="Imagem do post" width={400} height={400} />
        </header>

        <main className="px-4 pb-6 flex flex-col gap-4" >
          <div className="flex flex-col gap-1" >
            <h2 className="text-brand-gray-100 text-2xl font-mono" >{title}</h2>
            <span className="text-sm text-brand-gray-400 first-letter:uppercase" >{dayjs(createdAt).fromNow()}</span>
          </div>

          <div>
            <p>{description}</p>
          </div>
        </main>
      </DefaultCard>
    </Link>
  )
}