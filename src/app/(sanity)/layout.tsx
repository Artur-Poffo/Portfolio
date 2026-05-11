export const metadata = {
  title: 'Artur Poffo | Studio',
  description: 'Content Studio for Artur Poffo Software Engineer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
