export const metadata = {
  title: 'Artur Poffo | Studio',
  description: 'Portfólio do desenvolvedor Artur Poffo',
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
