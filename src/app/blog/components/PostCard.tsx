import { DefaultCard } from "@/components/UI/DefaultCard";
import Image from "next/image";
import Link from "next/link";

export function PostCard() {
  return (
    <Link href={"/"} >
      <DefaultCard className="max-w-[500px] min-h-[200px] md:min-h-[530px] flex flex-col gap-4 p-0" >
        <header className="w-full h-1/2" >
          <Image className="w-full h-full object-cover" src={"https://github.com/Artur-Poffo/Loyal-Sports/raw/main/public/README/Home.png?raw=true"} alt="Imagem do post" width={600} height={600} />
        </header>

        <main className="px-4 pb-6 flex flex-col gap-4" >
          <div className="flex flex-col gap-1" >
            <h2 className="text-brand-gray-100 text-2xl font-mono" >Clean Architecture, entenda sobre o conceito</h2>
            <span className="text-sm text-brand-gray-400" >Há 8 dias</span>
          </div>

          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur id laboriosam reiciendis exercitationem consequatur, nemo provident non enim ullam sed error explicabo dignissimos, incidunt quia, quaerat ut voluptate eaque? Dolor!</p>
          </div>
        </main>
      </DefaultCard>
    </Link>
  )
}