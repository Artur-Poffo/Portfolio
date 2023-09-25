import ReactMarkdown from "react-markdown"

interface MarkdownContainerProps {
  children: string
}

export function MarkdownContainer({ children }: MarkdownContainerProps) {
  return (
    <ReactMarkdown className="prose prose-invert max-w-none break-words prose-h2:text-brand-gray-100 prose-h2:text-2xl prose-h2:md:text-3xl prose-img:rounded-md prose-a:underline prose-a:underline-offset-4 prose-a:decoration-brand-blue-200 prose-a:transition-colors prose-a:font-normal hover:prose-a:text-brand-blue-200">
      {children}
    </ReactMarkdown>
  )
}