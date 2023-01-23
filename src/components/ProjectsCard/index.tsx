import { Card } from "./styles"

import Link from "next/link"
import Image from "next/image"

const ProjectsCard: React.FC = () => {
  return (
    <>
      <Card>
        <Link href={"/Projetos/work/dawdkpawdkopawokdpadkmw"} >
          <Image width={400} height={220} src={"https://lh3.googleusercontent.com/pw/AL9nZEXbAQRN-pNMqhRGMVVD3j9iYmDtEnZrd3SHSouNo5iQtvb7TMCCkoRdx12arNcw7_JKjmFZdXqC4QbIuqscSpAUYy7547J7vFjyD896ROBcmEwZcOTUKmDuzkUfICzE93ysYzLhBLwmFEU_11vStnrI=w1918-h933-no?authuser=0"} alt="Imagem do Projeto" />
          <div>
            <h2>My Blog</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Next.js</li>
              <li>Next.js</li>
              <li>Next.js</li>
              <li>Next.js</li>
            </ul>
          </div>
        </Link>
      </Card>
    </>
  )
}

export default ProjectsCard